const SUPABASE_URL = 'https://xffnsxxdexxemvzxqmdd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmZm5zeHhkZXh4ZW12enhxbWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5NDA4NjQsImV4cCI6MjA0NDUxNjg2NH0.RL9KOemHhBPPy5ubePtr71pmyWoV1RUW_3TZukzGOGw';


const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        // Use a instância do cliente Supabase
        const { data, error } = await _supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;

        alert('Login bem-sucedido!');
        // Redirecionar para a página principal ou mostrar conteúdo protegido
        window.location.href = 'index.html'; // Alterar para a página de produtos ou principal
    } catch (error) {
        console.error('Erro ao fazer login:', error.message);
        alert('Erro ao fazer login: ' + error.message);
    }
});