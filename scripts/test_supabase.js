import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://miufsostxxqeoeljwzmi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pdWZzb3N0eHhxZW9lbGp3em1pIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NjIzNTkzNSwiZXhwIjoyMTAxODExOTM1fQ.yMfSewDbAWHvzufsmdBiq10zkQ_XtS72G73jwrdMgeE';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSupabase() {
  console.log("-----------------------------------------");
  console.log("📡 ĐANG KIỂM TRA KẾT NỐI SUPABASE CLOUD...");
  console.log("URL:", supabaseUrl);
  
  const { data: users, error: userError } = await supabase.from('users').select('*');
  console.log("Bảng Users:", { count: users ? users.length : 0, error: userError?.message || null });

  const { data: config, error: configError } = await supabase.from('site_config').select('*');
  console.log("Bảng Site Config:", { dataCount: config ? config.length : 0, error: configError?.message || null });
  console.log("-----------------------------------------");
}

checkSupabase();
