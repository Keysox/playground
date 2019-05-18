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
            <NavLink activeClassName={ACTIVE_CLASS_NAME} to="/sports">
              Sports
            </NavLink>
            <NavLink activeClassName={ACTIVE_CLASS_NAME} to="/wildlife">
              Wildlife
            </NavLink>
          </nav>
          <Route exact path="/" component={All} />
          <Route path="/landscape" component={Landscape} />
          <Route path="/sports" component={Sports} />
          <Route path="/wildlife" component={Wildlife} />
        </>
      </BrowserRouter>
    )
  }
}

interface Image {
  alt: string
  src: string
}

const landscapeImages: Image[] = [
  {
    alt: 'Iguazu Falls',
    src:
      'https://lh3.googleusercontent.com/u2eQHjaRIekr01jVRXq16KMrtSNk3NuCdp6g8saiH__n8VXkOyLs_GK-3cIr6HJqtlLjPWXcrh6fzh3Atu82-psGyTj_q5d-poGwBJ2m4upfSrGLEEVpC7ZFZhBhHyayu6XxwZzi9E4PQcRkLET3pYDPE_TrULHfs1BcTfea2r70pnofbUNSE5lmiWUOUm0c_qEm5t1DIBMmoZE4cqqVA_36xraP3ZcZeajdEEICE4jLuzcdqw7egiXOQbAMzhuq3Wo7FCvRgwKfqmZ_olMdDyHfsHYKVa7mqGC8vpTzCk2BrsFE-iJBy2oklj8odCAMpZduEvXrmwtfSilWA_eDfPDp0r5ut74Xgnv0OHjMJOem3NluEjkkZ4G1mTSDtEJJISvfSkfA2361UJcd2FztCPecL4mbM-G7AlYTAwpPqqHexkGchcfINWEPvljmMLMX6MGUe_VV1DWLprYZtmqlCeW7zYbbq7dHIeJ9mTBC7YbOnWAFWXVwnTtFLaZukZLq916zA8LwB5A6_pvZh2mh_nzF5Kf7SLg_Nl2urTSjLoVIFYu0YujRrz_KtHLjTtCgLi8Z2aVrOfOko4tv75bK6WmN9_IFWXKHWskfFBQMMqk0Dpfn1yDMllj-Af1zPbb16l4DL0-wuuMHHo2sJ_zc5wQ-9awJmTP1=w1296-h1944-no',
  },
]

const sportsImages: Image[] = [
  {
    alt: 'Silverton Mountain Heli Skiing',
    src:
      'https://lh3.googleusercontent.com/ZEU7iF81RJasMYdRIO00zppdSQC6ZFhLVc02s0XWXzJMXseupv3y-LwHEWK0OUFH9kVm2ovjeq0Y_MdI14vNezZg6aRBWQwh2HWe2Hb_TJux_jFy4FEES43yfRs2q5iTazcgN9fcSeHaajK3gGy_OuT2JN14Z2QyUQTj54HTjKXQILJIMx3vu858yp4pGVwfY6KuGUONO8K8ma1m_TtIcfGyc_XTDVWjjPvZClaO2WDfG1x3lq8JGBAL3r2C_Ghk4xsdKI0N-v_NOo3Yxu2XwtihP3cL2l8AmNPKleANvji0I1UspYTCUsBSQ3rwEVTxvuuL915DXL0ymiNJIHWuETVRh7D_vhctuvFTyksfsldpeHp2XNBXu5H8vgltgqkp2GVwAQkG9Brs3MGSxXIWsZLFtqyObn3MTRP5BOWMr6sInDGfWkdaadWnhq6iMvY0-bDVJddoXTkkJtKAwrybJuVpZFCdlJB7IiUsmPd-YWZdr0VL2zu5lzKnv267k9sIrOajm5SDkEFlxkyGW9ZyPD6ATwfvZz-Nw-z-DCpEB0M4cPTP7KBhTeSh1IFb2NNUDxNbF56JPhYZE4yd4waF3jo1YRvITxd4zcdMB4xcAbLFLbqM1nIQYFJ--fTEhBNlkICaZEa4v8nYli3DFqurYPTDcOZ0zq3bHCV-vZcwwBZBfql4lu5FMvnBz8XRNrDEr2o1slwPPuDYYoOy2nW_dMHCog=w1458-h972-no',
  },
  {
    alt: 'Skiing Steamboat Side Country',
    src:
      'https://lh3.googleusercontent.com/LmeyGdkjJQilg_-th-rlOfxb2q6QGikVzFtVfTiGYzQbkfp8SnfcP1wZYAliQqIZuUcuXgdmG69aTx7mZOeTFdke7miQtWoZuF1xTSId1kaawJ0PFfNNXxPxBrRLlM1Dz4t2rwdufLAHLofxhstzJMybW4Ynu1JGSRtj6Z5Fyqi-u1oAJUCBeiyyGIy2lTbFVXjLUqhdxoOCc3OA_q6rl6H0GOFnpvmFv1D1VeVY97J7uYlh70d4fL1bOYQuY-kvH9XBrm9ZCUOFRAL1KWpL4ScpqFTEKveCZ_U51orBwH6XkYX_T2Fg5uJlceaKRL01RWQb7c7104K0gSQz1cV3pFAx3EXYinAfAzocvrTinQ1uhl9YvdkolBcYwVvARDmH-kcqxewoDyOc-ksDQHPJFGszQq5T-9jHkudIVEbHxboqqxsuqEIUIT7rsQln4eKnYk7dwFVFe8f3hRuW_RRXY9I3JUFSbjqHm1Sl1p6ro24aMDfzXOop5K6Lkphqlut_SDtifJd8RY0-N8aL9E4pcv7_-YSz8pFvLw6l0YqNnX9cbU5FScA060BNVVhwE9YFZsrT--xCSjYvOoFQKjz8Uim_ZzAUNKH1lfJd362u540I1QVyvaq_cAZ2WRDW0uJkOaDOK6rqjTOILbTl0IgCSv4SMPR-rbk2gWgHh1a3zOX3xIHwuavCJQOUYoEcEL1DjIYlA3_QMlEAfQh3_12PUYr0pg=w1460-h972-no',
  },
  {
    alt: 'Skiing Mount Rainier',
    src:
      'https://lh3.googleusercontent.com/zA7hegZQq1A3bi4iwEDvep57ymA8SsFWhVMCz_lwnLWzaLdgxp7LA5o9nUIfc0xH6yVEpc-UgrrgJpgmqBsuqK8uJaDvGNnlO9QrGblkViWWxg4q980DMyiZMpCI3pb4o-Z7z9SPCRxrAyz9chFDEfTv3iAbwkrrVlwtESMQYK3ExDKFcysfnuNRArVq1ru3I3GIixbcM-NhcGOJ61-7BXNGhcd76CwMsiwkQTjv-D6sOTpKpUmxANpy_CwgwGTWAkG3xA4SnSQZbm6LL3lNG7AndArAUFcW4tEmryLJ5grU4BlFfxShAlJxgb3gMWQztrTS2l0HzOjWvBDuA90fUXTf30xlQr9kOsf3AKlY4FcmiYlZzLlywFq5jBJXgwPb0YXQal7oeeyh3ZVmYXREr9SR30Jl0eIRbSM3BCRVFrVGztYDB6xBV2IftqaE4KeUGlflHv8BG-f1sk3DbHsspvjEDHqfcgdHfx8Sz8YKQ4apn9nzKRa7lmgaBKgcHtTS0FKMtEt8UaBCa8bIjhHXY8qDZgOhKimtciUjK3lnAhus6UPL2Pqgnx8uyYpsIBEkBWgTQcq8JOQlp0YZeXUa613gr1p8j4SuHgxsQPzqEZZVtbkikcn2P7JlPtEfjkzTIfu7yocO8XWrHAYZYtF6KBjZMG2EwqfKxMOU8QmobpzgyFDWLqQaLwOAubEjM2_V0fLowEMhfnzMDGRa2etIvkUFWg=w2640-h894-no',
  },
  {
    alt: 'Skiing Berthoud Pass',
    src:
      'https://lh3.googleusercontent.com/_Ov0Xr_QUpmXUIRZzzI2No25Bph77LEZbptbKn4CN2ii9h5L68zRnjDvcw9WF6DWy270d88D1DlaQpLoSulYeH7hmbUWR7romtFMnglDYIYXcyNKG1bSxYSuJwaFDEJ1fcRTHX8rMewUXB5o4j0ZR5MP2Se-OOBhGuMg-2kKn4tdmwXyaLgsjuvz6uXV42J36MnCXY-IhzhugjHcWoENzdzT6fcNCfSBliwKWdJssT94rXmceUNrTktv68dYyh95Su9rNH99AgfrLy5V-bydAoh9IwxaKx-FI4B7-8lmHz3NYdyB_LrbaN21IzxByoBoKuurd-wig2eHUpbVCgPbkGIPMzS2nO3SNQz-FbWXDgffQ4bnTE4czZ21GC1DhIohxFmpsMFqT61ReyXsLoKhAtZzdlUORKOQU3qEQZR7sQiVewQ3QojAYWQZNdoeugECdajIYxQGRbM7IuDftCBdchwqNXoKGW1stNWNUiy_nNVuI2JQSWOZ3v6Rs5ia9bJk8O8YMbFquQCxjgghSiBOKueZfoVkY-H_BQmeU2PR0xCVyWzy-ZzRFyOS3BZd7RkD_fCt8LiXS5-bTFx8W8NzkQ0X7uVFFV8GKHDmKL8IiL21Isi9AYvhhin8uSsh61ap46S9JZST43F7CSF3wShg-7y3BxZm7dDx-inOaOhENWenmBgik5mcO75h6acdkKOB8INgacY9fLMrocCZXY0udcy8QQ=w648-h972-no',
  },
  {
    alt: 'Skiing Eldora Mountain',
    src:
      'https://lh3.googleusercontent.com/RIXs4oz27Jm0lJ54-YVzs_0-_1tXvRe_S36PpZdQx-CoC-qmnNNFffGNnVX7ZGzUxDKmMVjeVYoA773b1pTglwNKMNP-r7gDVQa55Zeb-F_iaOsJJJ78Ukwc8rbWBBBZvABUFkI798WG2RLN4asrljRog_VLpoW7lDDdJFkA3-d1_uY8CMU_hil1GrkgGrosivbOkLA_iO8Pzaooeh-bMIY9SKYCVk2PD5R-OU0qGLEcdoviKO4AMinZM_IPiB-r5Hm4qXg0FSBaLGrM94RMn2G2ocXjKggVlcxTT8rjXcaw5WgWYaZzzK338K-uJsiU76i8EAnYQrRV2hMtMGBPgJd-DFQI5E0gOt8dctiRzNfiE0weWW1CNqJ72FgvhAZWJm5BHRumWXGrYTkeD0VHh4lPP2X8UdjTm2E22eLRN80zAPNsabotj9dQNtNcKKT5BbEF8PxN0nIg2a7vWm0ex6tlWrsT3hp2Aaug6jddI3_5lqyLkfgZ64fF9iAUySbjO-QxqBsvBRIU1D88XAZ8-mpwqu8y1hEU6Ir4VC69EptUvJ_nPbfvAyyOoAy8ypZ8HqQw6Rluv73sJRRjUPTsP7QOPlHPUn4GRxjOMKePmqw7UrgPUT0ITyHbZMx8ClRbSRHoqtjByowQ-71-oimqMwg31ie2jMS6-COh4ZvJLcsSajW39s5zJGbcrdX1rIZC57THrBcJJOwS12Jnhu1LhfnjMQ=w1458-h972-no',
  },
  {
    alt: 'Skiing Berthoud Pass',
    src:
      'https://lh3.googleusercontent.com/2EDfMYvpj635kNQJygGo7DgO-NsbGinq4nZlSv0bmGQxo1wa99ogPCFC59am2wPwgYPC4QBz-dhu495mH1r78i1zUdnYZyK4lXbP1seHZhkYYDO_7moG4an_s7XtB8ySFBHXohMZRQnEbFicjNtLws5lbyAQC0c50zWqHLEqbqgyhcCXNEz_ppnmVJdmPCa3G4T6804gcDYh015mnX_6rZnq8afys46CH3FfBH_yl3c8LVhkf8Oq9YY-ocG6mf0OLmLFlWLTuBgmo92Uc5_TnCmDYHSqzg67dXlde66HKTr8qbGwfaNZ5AFkya1m54t6EMvUQbd-DN7uzOCot252J9yEwXQDVO65TBGC3WJSlWHgB8xO1AbnK5RCpMqWFV4SmAAZwS-uJwin8PXvXwQTK75lyd5ozrTwu2KBtzu6IrmuA9Abov2bLierGsnPHt9sohcOStDLzTvMW3WRjA8SZhy2J6t7ne-tS3Tu4Y8lnKu8CvIbSNSFa1GgmTfN6RE2_AGk5xN-a6oS3Ncr0nb8mXq0fz6c2Ttryzy_CQwzcjzeBo-vpRKlyNreDrSefxWtIz7UZrazVBBB3dBwa2NL_c--Z14Dr86ytVsMFSMQGHqUzruNmjUPKpwqnDe-ZneG88NsmQ-n1ELk_xT8kUyLRiF1OoaWDsVZ81zOqqoS8bcGPLJUQ2xZ2ezhxTVhpbT8Lzdn_ZKNBur8AcseHO8gvKKu2A=w1460-h972-no',
  },
  {
    alt: 'Soccer in Peru',
    src:
      'https://lh3.googleusercontent.com/DbODGnoCXfzZtSgnMzHutDMB5tmbKQbdIfXSe-tMHSRhCYj2o-8hYoKnXbXSOgGj6RHrxAkKmF9DuJTvPJXg7tuCAMkuWZk0IQ-V_cbd34BSqu1L8wS5Q35m8-o4m6noLbFWJbYsh3eeZ_dQ-6we7pFK-65mJtjTUuWiHXhn7FOyas-w_OEii85vxUxQAxl2N_XKpZD92jfb3gLanq90yqwu1-qx0XLpMFAXGEVcnJdFvQjPT4QKuSEqnhBY3mgeLJAMcwFYGrVnePLunsZX9NoVh2YzZxxeH5uul0kQo40NsTr77diT_ICfPRAKwZLKp_uLMKZSn7_RftMmEcASAUQpdLaqlfgemVNAfUPbKE0FCsESNi179MHCP_U3v9of-11-eINRZ38Un4tweHHnMCjQ0UOyU-wXi2Jw2hIPBOGYigx9jeOJ9_alf39I49TpC3C5K-eSseTc-WbCqwXJJAVdGISsmGO86-wr4I39MdVWkTnDPxZkuhVVyqVB3I5oQdea6w3Iqu4W-NKRiH0Fid41Ww3yh_mHEJEP7GdoVWkJyXgszhWkz01k9AhaRs8yYuUnJnNwMjK1W1UY379NFlOoKaa_Hg86oqqabyJFKvAAZBtkjglaFc4xCKTt8NBk7fxeebZPu4uti8z-HzZEq5oArjGlePPL0oSzd8Oo041DE-qWffPxtZJSsUOMsH97VF3CqLWfarZIknYx-XILQON9Tg=w650-h972-no',
  },
]

const wildlifeImages: Image[] = [
  {
    alt: 'Black-throated mango hummingbird',
    src:
      'https://lh3.googleusercontent.com/Q3yc0m3wbV_RMd_-XqkBmkNK5eGpUZHLAWeKnspKfSYEzafGEbW5GV0AGOIkvTyVZQk0-pnn53l_4H3ptum6D10Eu0qEi_ntvK44Lgav4s82u9BmyfD245eo_oERufxjelTfZxdALJ1rz4x77Gt4kf3TLudodgigRIs3-dfBA5pg4t--tiIURa1m8C35S6FPUCxbxPJSL6VArkUDAAdAL2U6knaBs67r8nn2nAVzqbsNZflvx5LIIZPhkKbqtOY8zWN99-V7AStrKv_iQ932MIa3RJdyZ52kDffjr97BLALks09kAh6TW2mUn8WENPDiWFsEJUEyJxJ2lYSYsdE5MyrcY6faOyKmwQ_0ezaV2D93fRYNclxbc6z0IlZCWShUA2I8M_qintHz4ec4F_p-atf01oQvZkYi6EzrNuKnYD0u_WaBP_ZKK-LUEKohEIi0DvPVi1r3a8xDF56U9irsDDylrp8CSFYmkaL52SyYOqfwrwatBwJz5KQZvhOxXWt7hhiOAkVrvD2z3OaPFWtxbO9cC9McXTH9NnKlSQFk5DbqWoKPU2Sqff8gQ02LuIQu-DJtnMCSgO71O90UR53HC809EJ3HdBu6_YaytRSzECVYQ7U7e0oDVkka6bYygWSdX7JuWSADgVz1m34hpayo5aGmQKVxwUtD=w2912-h1942-no',
  },
]

function renderImages(images: Image[]) {
  const imgs = images.map(image => {
    return (
      <figure key={image.src}>
        <img alt={image.alt} src={image.src} title={image.alt} />
      </figure>
    )
  })
  return <main>{imgs}</main>
}

const All = () => {
  return renderImages(landscapeImages.concat(sportsImages, wildlifeImages))
}
const Landscape = () => {
  return renderImages(landscapeImages)
}
const Sports = () => {
  return renderImages(sportsImages)
}
const Wildlife = () => {
  return renderImages(wildlifeImages)
}

export default App
