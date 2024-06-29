// import {createClient, SupabaseClient} from '@supabase/supabase-js'
//
// // Dati per la connessione con Supabase
// const supabaseUrl = 'https://yuyyujadubndgfpxauug.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eXl1amFkdWJuZGdmcHhhdXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjA4MzUsImV4cCI6MjAzMzIzNjgzNX0.V8bBPKuA3fXB10LcA1inEJRDAv96y-ePQaNdpaKO0yo'
// const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)
//
// export async function getTarga(id_utente: number) {
//     let {data, error} = await supabase
//         .from('tipo_veicoli')
//         .select('targa')
//         .eq("id_utente", id_utente)
//
//     if (error) {
//         console.error('Error fetching users:', error)
//         return error
//     } else {
//         return data
//     }
// }
//
// export async function InsertTarga(id_utente: number, targa: string) {
//    try{
//        let {data, error} = await supabase
//            .from('tipo_veicoli')
//            .insert([{id_utente: id_utente, targa: targa}])
//        if (error) {
//            console.error('Error inserting data:', error);
//            return error
//        } else {
//            console.log('Data inserted successfully: ', data);
//        }
//    }catch(err){
//        console.error('Error inserting data:', err);
//    }
// }