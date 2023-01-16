import { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';

export function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const emailIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [countTimer] = useState(5000);

  useEffect(() => {
    const interval = setInterval(() => {
      setErrorMessage('');
    }, countTimer);
    return () => clearInterval(interval);
  }, [emailIdRef]);

  function handleSubmitForm(event: any) {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');

    if (!emailIdRef.current || passwordRef.current) {
      setErrorMessage('Os dois campos são obrigatorios!');
      setLoading(false);
    } else {
      // Call API to check user credentials and save token in localstorage
      localStorage.setItem('token', 'DumyToken');
      setLoading(false);
      window.location.href = '/dashboard';
    }
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-md  shadow-xl">
        <div className="py-12 p-10 bg-base-100 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
          <form onSubmit={(e) => handleSubmitForm(e)}>
            <p className="mb-2 text-error text-center">{errorMessage}</p>

            <div className="mb-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-base-content">Email</span>
                </label>
                <input
                  type="text"
                  ref={emailIdRef}
                  placeholder="Digite seu email"
                  className="input input-primary input-bordered w-full "
                />
              </div>

              <div className="form-control mt-4 w-full">
                <label className="label">
                  <span className="label-text text-base-content">Senha</span>
                </label>
                <input
                  type="password"
                  ref={passwordRef}
                  placeholder="Digite sua senha"
                  className="input input-primary input-bordered w-full "
                />
              </div>
            </div>

            <Link href="/forgotpassword">
              <span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                Esqueceu a senha ?
              </span>
            </Link>

            <button
              type="submit"
              className={
                'btn mt-8 w-full text-white  bg-rose-900' +
                (loading ? ' loading' : '')
              }
            >
              Logar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
