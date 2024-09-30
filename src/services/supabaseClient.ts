import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zyemimihfcilkfzgwsxv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5ZW1pbWloZmNpbGtmemd3c3h2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzE0OTYwOSwiZXhwIjoyMDQyNzI1NjA5fQ.exRwRJzNe1OwcnY-7oc6ZMWVu4Q1vUBaz9Ex-eAmYNo'; 

export const supabase = createClient(supabaseUrl, supabaseKey);