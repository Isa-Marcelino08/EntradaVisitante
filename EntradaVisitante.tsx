import { Link } from "react-router-dom";

const EntradaVisitante = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">O que você precisa saber:</h1>
        </header>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              O cadastro como participante é para aqueles que estão interessados em conhecer mais sobre o mundo cristão, 
              participar de grupos de apoio e acolhimento ou encontrar igrejas próximas, mas que não possuem a intenção 
              de publicar conteúdos ou cadastrar células e igrejas para fins de divulgação.
            </p>
            <p className="text-gray-600 mb-6">
              Já o cadastro como líder é para aqueles cristãos responsáveis por células, igrejas ou grupos de discipulado, 
              que desejam compartilhar conteúdos bíblicos, cadastrar suas comunidades e ajudar outros a se conectar com a fé.
            </p>
            <p className="text-gray-800 font-semibold mb-6">
              E aí, qual deles faz o seu perfil? Leve essas informações em consideração e realize o seu cadastro!
            </p>
          </div>

          <div className="flex gap-4 justify-center mt-8">
            <Link 
              to="/login" 
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Login 
            </Link>

            <Link 
              to="/register" 
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Cadastro 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntradaVisitante;