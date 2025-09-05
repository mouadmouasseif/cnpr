// components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-8 py-10 border-t border-gray-100 mt-12  ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo et nom de la société */}
        <div className="flex items-center gap-3">
          <Image
            src="/Image/logo2.png"
            alt="Car N Go logo"
            width={100}
            height={100}
            className="rounded-md"
          />
          <h1 className="text-xl font-bold text-blue-800">Club Nautique plage de Rabat</h1>
        </div>

        {/* Liens légaux */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
          <a href="/privacy-policy" className="hover:text-black">Politique de confidentialité</a>
          <a href="/terms-of-service" className="hover:text-black">Conditions d'utilisation</a>
        </div>

        {/* Développement */}
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span>Développé par</span>
          <a
            href="https://www.linkedin.com/company/mm-servicese/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow-400"
          >
            <Image
              src="/Image/logo_v1.png" // à placer dans public/images/
              alt="MMService logo"
              width={50}
              height={50}
              className="rounded"
            />
            <span className="font-semibold">MMService</span>
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-6">
        &copy;2025 CNPR RABAT & <a href="https://www.linkedin.com/company/mm-servicese/?viewAsMember=true">MMService</a>. Tous droits réservés.
      </p>
    </footer>
  );
}
