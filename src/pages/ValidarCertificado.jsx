import Banner from '../components/Banner'
import CertificadoIframe from '../components/CertificadoIframe'
import './ValidarCertificado.css'

export default function ValidarCertificado() {
  return (
    <div className="validar-page">
      <Banner />

      <main className="validar-main">
        <section className="validar-steps">
          <h1>Validação de certificado</h1>
          <p className="lead">Siga os passos abaixo para validar o seu certificado Evolutec.</p>

          <ol className="steps-list">
            <li>
              <strong>Localize o código do seu certificado</strong>
              <p>O código geralmente aparece na parte inferior do documento ou no verso do certificado. Ele pode estar formatado como grupos de letras e números.</p>
            </li>
            <li>
              <strong>Acesse o validador</strong>
              <p>Use o formulário abaixo para inserir o código. Caso tenha dúvidas sobre como localizar o código, clique em "Como identificar o código?" dentro do validador.</p>
            </li>
            <li>
              <strong>Insira o código e verifique</strong>
              <p>Digite o código exatamente como aparece no certificado e clique em "Verificar validação". O sistema retornará o status do seu certificado.</p>
            </li>
          </ol>
        </section>

        <section className="validar-iframe">
          <CertificadoIframe />
        </section>
      </main>
    </div>
  )
}
