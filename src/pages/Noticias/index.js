import React from 'react';
import './index.css';
import MyNavBar from '../../components/MyNavBar';
import MyFooter from '../../components/MyFooter';

// import { Container } from './styles';

function Noticias() {
  return (
    <>
      <MyNavBar />
      <h1 id="titleNoticia">Notícias</h1>
      <section>
        <div className="d-flex justify-content-center flex-column">
          <table className=" table table-hover tab ">
            <thead
              className="text-white"
              style={{ backgroundColor: '#2f3a60' }}
            >
              <tr>
                <th scope="col">DATA</th>
                <th scope="col">TÍTULO</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>10/02/2021 10:11</td>
                <td>
                  <a className="nav-link " href="#oi">
                    Semana de defesa de Trabalhos de Conclusão de Curso -
                    Ano/Semestre 2020.2
                  </a>
                </td>
              </tr>
              <tr>
                <td>10/02/2021 10:10</td>
                <td>
                  <a className="nav-link " href="#oi">
                    Calendário para projeto de Trabalho de Conclusão de Curso
                    Ano/Semestre 2021.1
                  </a>
                </td>
              </tr>

              <tr>
                <td>10/02/2021 10:08</td>
                <td>
                  <a className="nav-link " href="#oi">
                    Plano de curso das turmas de 2020.2
                  </a>
                </td>
              </tr>

              <tr>
                <td>17/08/2020 09:34</td>
                <td>
                  <a className="nav-link " href="#oi">
                    Calendário para projeto de Trabalho de Conclusão de Curso
                    Ano/Semestre 2020.2
                  </a>
                </td>
              </tr>

              <tr>
                <td>17/08/2020 09:32</td>
                <td>
                  <a className="nav-link " href="#oi">
                    Semana de defesa de Trabalhos de Conclusão de Curso -
                    Ano/Semestre 2020.1
                  </a>
                </td>
              </tr>

              <tr>
                <td>12/08/2020 19:54</td>
                <td>
                  <a className="nav-link " href="#oi">
                    Plano de curso das turmas de 2020.1 - Retomada
                  </a>
                </td>
              </tr>

              <tr>
                <td>29/07/2020 00:40</td>
                <td>
                  <a className="nav-link " href="#oi">
                    Defesa de Trabalho de Conclusão de Curso de 2020.1
                  </a>
                </td>
              </tr>

              <tr>
                <td>09/06/2020 21:05</td>
                <td>
                  <a className="nav-link " href="#oi">
                    {' '}
                    Planos de Curso para o Período Letivo Suplementar
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <MyFooter />
    </>
  );
}

export default Noticias;
