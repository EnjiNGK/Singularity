import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <SEOHead
        title="Pagina Non Trovata | Singularity Dream"
        description="La pagina che stai cercando non esiste o è stata spostata."
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Pagina non trovata</p>
        <Link to="/" className="text-primary hover:text-primary/80 underline">
          Torna alla Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
