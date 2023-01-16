import { useState, useRef, useEffect } from 'react';
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon';
import { Link } from 'wouter';

export function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [linkSent, setLinkSent] = useState(false);
  const emailIdRef = useRef<HTMLInputElement>(null);
  const [countTimer] = useState(5000);

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    if (!emailIdRef.current) {
      setErrorMessage('Email é obrigatorio!');
      setLoading(false);
    } else {
      setLinkSent(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setErrorMessage('');
    }, countTimer);
    return () => clearInterval(interval);
  }, [emailIdRef]);

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-md  shadow-xl">
        <div className="py-12 p-10 bg-base-100 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Esqueceu a sua senha ?
          </h2>
          <form onSubmit={(e) => handleSubmitForm(e)}>
            {!linkSent ? (
              <div>
                <p className="my-4 font-semibold text-center">
                  Nos vamos enviar um email de redefinição de senha
                </p>
                <p className="mb-2 text-error text-center">{errorMessage}</p>

                <div className="mb-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-base-content">
                        Email
                      </span>
                    </label>
                    <input
                      type="text"
                      ref={emailIdRef}
                      placeholder="Digite seu email"
                      className="input input-primary input-bordered w-full "
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={
                    'btn mt-8 w-full text-white  bg-rose-900' +
                    (loading ? ' loading' : '')
                  }
                >
                  Enviar link de redefinição de senha
                </button>
                <Link href="/login">
                  <div className="text-center pt-6">
                    <span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                      Tela de login ?
                    </span>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="text-center p-8">
                <CheckCircleIcon className="h-16 w-16  inline-block" />
                <p className="my-3 font-semibold text-center">
                  Enviamos link de redefinição de senha em seu email
                </p>

                <Link to="/login">
                  <button
                    type="submit"
                    className={'btn mt-8 w-full text-white  bg-rose-900'}
                  >
                    Login
                  </button>
                </Link>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
