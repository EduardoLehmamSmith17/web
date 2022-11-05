//interface HomeProps {
//  count: number;
//}

import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg' 
import usersAvatarExampleImg from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'

export default function Home( ) {
  return (
    <div className="max-w-[1124px] mx-auto">
      <main>
        <Image src={logoImg} alt="NLW Copa" quality={100}/>

        <h1> Crie seu prórprio bolão da copa e compartilhe entre amigos!</h1>

        <div>
          <Image src={usersAvatarExampleImg} alt="" quality={100}/>
          <strong>
            <span>+12.600</span> pessoas já estão usando
          </strong>
        </div>

        
        <form>
          <input type="text" required placeholder="Qual nome do seu bolão" />
          <button type="submit">Criar meu bolão</button>
        </form>

        <p>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>

        <div>
          <div>
            <Image src={iconCheckImg} alt="" quality={100}/>
            <div>
              <span>+2.100</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div>
            <Image src={iconCheckImg} alt="" quality={100}/>
            <div>
              <span>+2.100</span>
              <span>Bolões criados</span>
            </div>
          </div>
        </div>
      </main>

      <Image 
        src={appPreviewImg} 
        alt="Dois celulares exibindo uma prévia da aplicação mobile da NLW Copa"
        quality={100}
      />
    </div>

  )
}

//export const getServerSideProps = async () => {
//  const response = await fetch('http://localhost:3333/pools/count')
//  const data = await response.json()
//
//  return {
//    props: {
//      count: data.count,
//    }
//  }
//}
