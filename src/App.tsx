import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

const ACTIVE_CLASS_NAME = 'selected'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={'photography'}>
        <>
          <header>
            <h1>Alex Kessock Photography</h1>
          </header>
          <nav>
            <NavLink activeClassName={ACTIVE_CLASS_NAME} exact={true} to="/">
              All
            </NavLink>
            <NavLink activeClassName={ACTIVE_CLASS_NAME} to="/landscape">
              Landscape
            </NavLink>
            <NavLink activeClassName={ACTIVE_CLASS_NAME} to="/wildlife">
              Wildlife
            </NavLink>
          </nav>
          <Route exact path="/" component={All} />
          <Route path="/landscape" component={Landscape} />
          <Route path="/wildlife" component={Wildlife} />
        </>
      </BrowserRouter>
    )
  }
}

type ImageCategory = 'landscape' | 'wildlife'
interface Image {
  alt: string
  category: ImageCategory
  src: string
}

const images: Image[] = [
  {
    alt: 'Black-throated mango hummingbird',
    category: 'wildlife',
    src:
      'https://lh3.googleusercontent.com/Q3yc0m3wbV_RMd_-XqkBmkNK5eGpUZHLAWeKnspKfSYEzafGEbW5GV0AGOIkvTyVZQk0-pnn53l_4H3ptum6D10Eu0qEi_ntvK44Lgav4s82u9BmyfD245eo_oERufxjelTfZxdALJ1rz4x77Gt4kf3TLudodgigRIs3-dfBA5pg4t--tiIURa1m8C35S6FPUCxbxPJSL6VArkUDAAdAL2U6knaBs67r8nn2nAVzqbsNZflvx5LIIZPhkKbqtOY8zWN99-V7AStrKv_iQ932MIa3RJdyZ52kDffjr97BLALks09kAh6TW2mUn8WENPDiWFsEJUEyJxJ2lYSYsdE5MyrcY6faOyKmwQ_0ezaV2D93fRYNclxbc6z0IlZCWShUA2I8M_qintHz4ec4F_p-atf01oQvZkYi6EzrNuKnYD0u_WaBP_ZKK-LUEKohEIi0DvPVi1r3a8xDF56U9irsDDylrp8CSFYmkaL52SyYOqfwrwatBwJz5KQZvhOxXWt7hhiOAkVrvD2z3OaPFWtxbO9cC9McXTH9NnKlSQFk5DbqWoKPU2Sqff8gQ02LuIQu-DJtnMCSgO71O90UR53HC809EJ3HdBu6_YaytRSzECVYQ7U7e0oDVkka6bYygWSdX7JuWSADgVz1m34hpayo5aGmQKVxwUtD=w2912-h1942-no',
  },
  {
    alt: 'Iguazu Falls',
    category: 'landscape',
    src:
      'https://lh3.googleusercontent.com/u2eQHjaRIekr01jVRXq16KMrtSNk3NuCdp6g8saiH__n8VXkOyLs_GK-3cIr6HJqtlLjPWXcrh6fzh3Atu82-psGyTj_q5d-poGwBJ2m4upfSrGLEEVpC7ZFZhBhHyayu6XxwZzi9E4PQcRkLET3pYDPE_TrULHfs1BcTfea2r70pnofbUNSE5lmiWUOUm0c_qEm5t1DIBMmoZE4cqqVA_36xraP3ZcZeajdEEICE4jLuzcdqw7egiXOQbAMzhuq3Wo7FCvRgwKfqmZ_olMdDyHfsHYKVa7mqGC8vpTzCk2BrsFE-iJBy2oklj8odCAMpZduEvXrmwtfSilWA_eDfPDp0r5ut74Xgnv0OHjMJOem3NluEjkkZ4G1mTSDtEJJISvfSkfA2361UJcd2FztCPecL4mbM-G7AlYTAwpPqqHexkGchcfINWEPvljmMLMX6MGUe_VV1DWLprYZtmqlCeW7zYbbq7dHIeJ9mTBC7YbOnWAFWXVwnTtFLaZukZLq916zA8LwB5A6_pvZh2mh_nzF5Kf7SLg_Nl2urTSjLoVIFYu0YujRrz_KtHLjTtCgLi8Z2aVrOfOko4tv75bK6WmN9_IFWXKHWskfFBQMMqk0Dpfn1yDMllj-Af1zPbb16l4DL0-wuuMHHo2sJ_zc5wQ-9awJmTP1=w1296-h1944-no',
  },
]

function renderImages(category?: ImageCategory) {
  const imgs = images
    .filter(image => {
      return category ? image.category === category : true
    })
    .map(image => {
      return (
        <figure key={image.src}>
          <img alt={image.alt} src={image.src} title={image.alt} />
        </figure>
      )
    })
  return <main>{imgs}</main>
}

const All = () => {
  return renderImages()
}
const Landscape = () => {
  return renderImages('landscape')
}
const Wildlife = () => {
  return renderImages('wildlife')
}

export default App
