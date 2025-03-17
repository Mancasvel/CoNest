-- Create the contact_messages table
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'read', 'replied', 'archived')),
  replied_at TIMESTAMP WITH TIME ZONE,
  notes TEXT
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy for admins to view all messages
CREATE POLICY "Admins can view all contact messages"
  ON contact_messages
  FOR SELECT
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admins));

-- Create policy to allow anyone to insert messages
CREATE POLICY "Anyone can create contact messages"
  ON contact_messages
  FOR INSERT
  WITH CHECK (true);

-- Create policy for admins to update messages
CREATE POLICY "Admins can update contact messages"
  ON contact_messages
  FOR UPDATE
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admins));

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION update_contact_message_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.status = 'replied' AND OLD.status != 'replied' THEN
    NEW.replied_at = NOW();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for timestamp updates
CREATE TRIGGER update_contact_message_timestamp
  BEFORE UPDATE ON contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION update_contact_message_timestamp(); 