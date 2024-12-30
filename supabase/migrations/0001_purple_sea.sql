/*
  # Initial Schema Setup

  1. New Tables
    - `assets`
      - `id` (uuid, primary key)
      - `name` (text)
      - `category` (text)
      - `location` (text)
      - `status` (text)
      - `condition` (text)
      - `quantity` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    - `classrooms`
      - `id` (uuid, primary key)
      - `grade` (integer)
      - `section` (text)
      - `created_at` (timestamp)
    - `asset_assignments`
      - Links assets to classrooms
      
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create assets table
CREATE TABLE IF NOT EXISTS assets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  location text NOT NULL,
  status text NOT NULL,
  condition text NOT NULL,
  quantity integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create classrooms table
CREATE TABLE IF NOT EXISTS classrooms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  grade integer NOT NULL,
  section text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(grade, section)
);

-- Create asset assignments table
CREATE TABLE IF NOT EXISTS asset_assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id uuid REFERENCES assets(id) ON DELETE CASCADE,
  classroom_id uuid REFERENCES classrooms(id) ON DELETE CASCADE,
  quantity integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  UNIQUE(asset_id, classroom_id)
);

-- Enable RLS
ALTER TABLE assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE classrooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE asset_assignments ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow authenticated users full access to assets"
  ON assets FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users full access to classrooms"
  ON classrooms FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users full access to asset_assignments"
  ON asset_assignments FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);