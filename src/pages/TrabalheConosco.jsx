import { useState, useRef } from 'react'
import './TrabalheConosco.css'

function TrabalheConosco() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    role: 'Business',
    companyName: '',
    city: '',
    postcode: '',
    agreePolicy: false,
    curriculo: null,
  })
  const fileInputRef = useRef(null)

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulário enviado:', form)
    alert('Currículo enviado com sucesso!')
    setForm({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      role: 'Business',
      companyName: '',
      city: '',
      postcode: '',
      agreePolicy: false,
      curriculo: null,
    })
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="trabalhe-conosco-page">
      {/* Hero Section */}
      <section className="trabalhe-conosco-hero">
        <div className="trabalhe-conosco-hero-content">
          <h1>Trabalhe Conosco</h1>
          <p>Venha fazer parte da equipe Evolutec e construa uma carreira de sucesso!</p>
        </div>
      </section>

      <section className="trabalhe-conosco-section">
        <div className="trabalhe-conosco-container">
          <div className="trabalhe-conosco-content">
            <h2>Sobre você</h2>
            <p>Preencha o formulário abaixo e anexe seu currículo.</p>
          
          <form className="trabalhe-conosco-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Primeiro Nome</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Digite seu primeiro nome"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Sobrenome</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Digite seu sobrenome"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Número de Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Seu número de telefone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Endereço de E-mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu endereço de e-mail"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Diga-nos quem você é</label>
              <select name="role" value={form.role} onChange={handleChange}>
                <option value="Business">Empresa</option>
                <option value="Candidate">Candidato</option>
                <option value="Other">Outro</option>
              </select>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Nome da Empresa</label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Nome da sua empresa"
                  value={form.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Diga-nos onde você está</label>
                <select name="city" value={form.city} onChange={handleChange}>
                  <option value="">Selecione sua cidade</option>
                  <option value="Sao Paulo">São Paulo</option>
                  <option value="Rio de Janeiro">Rio de Janeiro</option>
                  <option value="Belo Horizonte">Belo Horizonte</option>
                  <option value="Other">Outra</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label>CEP</label>
              <input
                type="text"
                name="postcode"
                placeholder="Digite seu CEP"
                value={form.postcode}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group file-group full-width">
              <label htmlFor="curriculo">Anexar Currículo (PDF, DOC, DOCX)</label>
              <input
                type="file"
                id="curriculo"
                name="curriculo"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                ref={fileInputRef}
                required
              />
            </div>

            <div className="form-group checkbox-group full-width">
              <label>
                <input
                  type="checkbox"
                  name="agreePolicy"
                  checked={form.agreePolicy}
                  onChange={handleChange}
                  required
                />
                Eu concordo com a <a href="#">Política de Privacidade</a> da Evolutec
              </label>
            </div>
            
            <button type="submit" className="btn-enviar">
              Começar
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
  )
}

export default TrabalheConosco
