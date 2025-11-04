import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://hfaqqopuurgqinorkxuz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmYXFxb3B1dXJncWlub3JreHV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxOTYwMDgsImV4cCI6MjA3Nzc3MjAwOH0.B1VN3_hNCa5ukm_nMHfNYC6PlEaeTlwht_TA6N-HatI')