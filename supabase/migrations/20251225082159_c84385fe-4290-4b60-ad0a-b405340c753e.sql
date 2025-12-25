-- Create table for storing form requests
CREATE TABLE public.requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_read BOOLEAN NOT NULL DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE public.requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit a request"
ON public.requests
FOR INSERT
WITH CHECK (true);

-- Allow anyone to select (admin page access via hidden URL)
CREATE POLICY "Anyone can view requests"
ON public.requests
FOR SELECT
USING (true);

-- Allow anyone to update (for marking as read)
CREATE POLICY "Anyone can update requests"
ON public.requests
FOR UPDATE
USING (true);

-- Add index for faster queries
CREATE INDEX idx_requests_created_at ON public.requests(created_at DESC);