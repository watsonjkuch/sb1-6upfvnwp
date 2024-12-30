import React, { createContext, useContext, useEffect, useState } from 'react';
import { Asset } from '../types/assets';
import { supabase } from '../lib/supabase';

interface AssetContextType {
  assets: Asset[];
  addAsset: (asset: Asset) => Promise<void>;
  updateAsset: (asset: Asset) => Promise<void>;
  deleteAsset: (id: string) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const AssetContext = createContext<AssetContextType | undefined>(undefined);

export function AssetProvider({ children }: { children: React.ReactNode }) {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAssets();
  }, []);

  async function fetchAssets() {
    try {
      const { data, error } = await supabase
        .from('assets')
        .select('*');

      if (error) throw error;
      setAssets(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  async function addAsset(asset: Asset) {
    try {
      const { error } = await supabase
        .from('assets')
        .insert([asset]);

      if (error) throw error;
      await fetchAssets();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  }

  async function updateAsset(asset: Asset) {
    try {
      const { error } = await supabase
        .from('assets')
        .update(asset)
        .eq('id', asset.id);

      if (error) throw error;
      await fetchAssets();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  }

  async function deleteAsset(id: string) {
    try {
      const { error } = await supabase
        .from('assets')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchAssets();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  }

  return (
    <AssetContext.Provider value={{ 
      assets, 
      addAsset, 
      updateAsset, 
      deleteAsset,
      loading,
      error 
    }}>
      {children}
    </AssetContext.Provider>
  );
}

export function useAssets() {
  const context = useContext(AssetContext);
  if (!context) {
    throw new Error('useAssets must be used within an AssetProvider');
  }
  return context;
}