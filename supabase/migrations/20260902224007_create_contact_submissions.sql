/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
- `id` (uuid, primary key)
- `name` (text, not null) — submitter's full name
- `email` (text, not null) — submitter's email address
- `project_type` (text) — optional category of project interest
- `message` (text) — optional free-form message
- `drive_link` (text) — Google Drive URL to reference files
- `created_at` (timestamp, defaults to now)
2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT only (public contact form).
- No SELECT/UPDATE/DELETE for anon or authenticated — submissions are write-only from the frontend.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  project_type text,
  message text,
  drive_link text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);
