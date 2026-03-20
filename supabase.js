const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ncpmuvbbxzjctxifvkad.supabase.co';
const supabaseKey = 'sb_publishable_zIknWNVWxOMpW5MSjjLmIw_uB2upjN7';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;