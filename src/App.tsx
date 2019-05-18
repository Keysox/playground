import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import { shuffle } from 'lodash'

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
            <NavLink activeClassName={ACTIVE_CLASS_NAME} to="/street">
              Street
            </NavLink>
            <NavLink activeClassName={ACTIVE_CLASS_NAME} to="/wildlife">
              Wildlife
            </NavLink>
          </nav>
          <Route exact path="/" component={All} />
          <Route path="/landscape" component={Landscape} />
          <Route path="/sports" component={Sports} />
          <Route path="/street" component={Street} />
          <Route path="/wildlife" component={Wildlife} />
        </>
      </BrowserRouter>
    )
  }
}

interface Image {
  cameraMetadata: string
  date: string
  description: string
  src: string
}

const landscapeImages: Image[] = [
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/18 2s 18mm ISO100',
    date: 'Jan 2, 2019 Wed, 10:30 AM',
    description: 'Iguazu Falls',
    src:
      'https://lh3.googleusercontent.com/u2eQHjaRIekr01jVRXq16KMrtSNk3NuCdp6g8saiH__n8VXkOyLs_GK-3cIr6HJqtlLjPWXcrh6fzh3Atu82-psGyTj_q5d-poGwBJ2m4upfSrGLEEVpC7ZFZhBhHyayu6XxwZzi9E4PQcRkLET3pYDPE_TrULHfs1BcTfea2r70pnofbUNSE5lmiWUOUm0c_qEm5t1DIBMmoZE4cqqVA_36xraP3ZcZeajdEEICE4jLuzcdqw7egiXOQbAMzhuq3Wo7FCvRgwKfqmZ_olMdDyHfsHYKVa7mqGC8vpTzCk2BrsFE-iJBy2oklj8odCAMpZduEvXrmwtfSilWA_eDfPDp0r5ut74Xgnv0OHjMJOem3NluEjkkZ4G1mTSDtEJJISvfSkfA2361UJcd2FztCPecL4mbM-G7AlYTAwpPqqHexkGchcfINWEPvljmMLMX6MGUe_VV1DWLprYZtmqlCeW7zYbbq7dHIeJ9mTBC7YbOnWAFWXVwnTtFLaZukZLq916zA8LwB5A6_pvZh2mh_nzF5Kf7SLg_Nl2urTSjLoVIFYu0YujRrz_KtHLjTtCgLi8Z2aVrOfOko4tv75bK6WmN9_IFWXKHWskfFBQMMqk0Dpfn1yDMllj-Af1zPbb16l4DL0-wuuMHHo2sJ_zc5wQ-9awJmTP1=w1296-h1944-no',
  },
  {
    cameraMetadata: 'Google Pixel 2 XL ƒ/1.8 1/632 4.459mm ISO54',
    date: 'Dec 23, 2018 Sun, 7:04 AM',
    description: 'Amazon River in Llanchama, Peru',
    src:
      'https://lh3.googleusercontent.com/A6yBGd2ZkYBrOL-5urQy5F8qOMMmdZ5bQX3BEopvzhGO-6WIeykFi11UxUYSMKegX_Ve5PGEzuJ4tztXfX0omS_Pq065Kuql8COgMHiWp6sX0e5_3irgyJNZXgekhRV-ClYzz9pOIO64Z5IWqD2jtwxH-n2fiIhZi6o_VwOrVKsT8jNjR2_EUXvMPf_ykFtNxXgdgZdJbJAyzo0jvJtdaQLBtkbc8qrIpwoKZUiZ27h4uwtoSFeYNlve1-dSc0z7ILBpbp6__mcgJVeQeTSs6MQX3dcumS2pjPKpe5wd0FOhJ4raAhZJ0iKL38S0MwkHYW-Ur_4a6LCzYYDQ9B5OxJ3hndB7T4spXk8G_INauLVOv_I2CiqLTzISr7ISe-orQYMw2FrD4bXdmi90hqscZ086z0UdyVQZWeLAtNOCO0Eiymm2DyRwtjMU64ypH7XAHbSrwumuYWUxqBu_IAAY2wn8mvn5uKXswvAgivWE1biS7KRKUwZC9wYVsIWMSHFF-u4SHSAfrrrMbViVSgiQso5x-POXSvuLQSqZohUpYy5-Fdj_R-u7WDGvuBP9a_LPRa6RxRftASOXinYomjzcvG-bXmEAW_jpZ53nB7BBM-SQk6N4scownq4tzd7PWmMLkMpIz1qY8gjgi2tkToboZVmITtCiy07ec9TyxDWrLSCfjzOKaMLett1qDDRs8pBcVDWf5V0gCjzPBd638_wbk_w7Ig=w1296-h974-no',
  },
]

const sportsImages: Image[] = [
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5.6 1/2500 18mm ISO100',
    date: 'Mar 16, 2019 Sat, 9:35 AM',
    description: 'Silverton Mountain Heli Skiing',
    src:
      'https://lh3.googleusercontent.com/ZEU7iF81RJasMYdRIO00zppdSQC6ZFhLVc02s0XWXzJMXseupv3y-LwHEWK0OUFH9kVm2ovjeq0Y_MdI14vNezZg6aRBWQwh2HWe2Hb_TJux_jFy4FEES43yfRs2q5iTazcgN9fcSeHaajK3gGy_OuT2JN14Z2QyUQTj54HTjKXQILJIMx3vu858yp4pGVwfY6KuGUONO8K8ma1m_TtIcfGyc_XTDVWjjPvZClaO2WDfG1x3lq8JGBAL3r2C_Ghk4xsdKI0N-v_NOo3Yxu2XwtihP3cL2l8AmNPKleANvji0I1UspYTCUsBSQ3rwEVTxvuuL915DXL0ymiNJIHWuETVRh7D_vhctuvFTyksfsldpeHp2XNBXu5H8vgltgqkp2GVwAQkG9Brs3MGSxXIWsZLFtqyObn3MTRP5BOWMr6sInDGfWkdaadWnhq6iMvY0-bDVJddoXTkkJtKAwrybJuVpZFCdlJB7IiUsmPd-YWZdr0VL2zu5lzKnv267k9sIrOajm5SDkEFlxkyGW9ZyPD6ATwfvZz-Nw-z-DCpEB0M4cPTP7KBhTeSh1IFb2NNUDxNbF56JPhYZE4yd4waF3jo1YRvITxd4zcdMB4xcAbLFLbqM1nIQYFJ--fTEhBNlkICaZEa4v8nYli3DFqurYPTDcOZ0zq3bHCV-vZcwwBZBfql4lu5FMvnBz8XRNrDEr2o1slwPPuDYYoOy2nW_dMHCog=w1458-h972-no',
  },
  {
    cameraMetadata: 'Canon Canon EOS 7D ƒ/4 1/3200 40mm ISO200',
    date: 'Feb 24, 2013 Sun, 11:20 AM',
    description: 'Skiing Steamboat Side Country',
    src:
      'https://lh3.googleusercontent.com/LmeyGdkjJQilg_-th-rlOfxb2q6QGikVzFtVfTiGYzQbkfp8SnfcP1wZYAliQqIZuUcuXgdmG69aTx7mZOeTFdke7miQtWoZuF1xTSId1kaawJ0PFfNNXxPxBrRLlM1Dz4t2rwdufLAHLofxhstzJMybW4Ynu1JGSRtj6Z5Fyqi-u1oAJUCBeiyyGIy2lTbFVXjLUqhdxoOCc3OA_q6rl6H0GOFnpvmFv1D1VeVY97J7uYlh70d4fL1bOYQuY-kvH9XBrm9ZCUOFRAL1KWpL4ScpqFTEKveCZ_U51orBwH6XkYX_T2Fg5uJlceaKRL01RWQb7c7104K0gSQz1cV3pFAx3EXYinAfAzocvrTinQ1uhl9YvdkolBcYwVvARDmH-kcqxewoDyOc-ksDQHPJFGszQq5T-9jHkudIVEbHxboqqxsuqEIUIT7rsQln4eKnYk7dwFVFe8f3hRuW_RRXY9I3JUFSbjqHm1Sl1p6ro24aMDfzXOop5K6Lkphqlut_SDtifJd8RY0-N8aL9E4pcv7_-YSz8pFvLw6l0YqNnX9cbU5FScA060BNVVhwE9YFZsrT--xCSjYvOoFQKjz8Uim_ZzAUNKH1lfJd362u540I1QVyvaq_cAZ2WRDW0uJkOaDOK6rqjTOILbTl0IgCSv4SMPR-rbk2gWgHh1a3zOX3xIHwuavCJQOUYoEcEL1DjIYlA3_QMlEAfQh3_12PUYr0pg=w1460-h972-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5 1/3200 35mm ISO100',
    date: 'Nov 10, 2018 Sat, 1:20 PM',
    description: 'Skiing Mount Rainier',
    src:
      'https://lh3.googleusercontent.com/zA7hegZQq1A3bi4iwEDvep57ymA8SsFWhVMCz_lwnLWzaLdgxp7LA5o9nUIfc0xH6yVEpc-UgrrgJpgmqBsuqK8uJaDvGNnlO9QrGblkViWWxg4q980DMyiZMpCI3pb4o-Z7z9SPCRxrAyz9chFDEfTv3iAbwkrrVlwtESMQYK3ExDKFcysfnuNRArVq1ru3I3GIixbcM-NhcGOJ61-7BXNGhcd76CwMsiwkQTjv-D6sOTpKpUmxANpy_CwgwGTWAkG3xA4SnSQZbm6LL3lNG7AndArAUFcW4tEmryLJ5grU4BlFfxShAlJxgb3gMWQztrTS2l0HzOjWvBDuA90fUXTf30xlQr9kOsf3AKlY4FcmiYlZzLlywFq5jBJXgwPb0YXQal7oeeyh3ZVmYXREr9SR30Jl0eIRbSM3BCRVFrVGztYDB6xBV2IftqaE4KeUGlflHv8BG-f1sk3DbHsspvjEDHqfcgdHfx8Sz8YKQ4apn9nzKRa7lmgaBKgcHtTS0FKMtEt8UaBCa8bIjhHXY8qDZgOhKimtciUjK3lnAhus6UPL2Pqgnx8uyYpsIBEkBWgTQcq8JOQlp0YZeXUa613gr1p8j4SuHgxsQPzqEZZVtbkikcn2P7JlPtEfjkzTIfu7yocO8XWrHAYZYtF6KBjZMG2EwqfKxMOU8QmobpzgyFDWLqQaLwOAubEjM2_V0fLowEMhfnzMDGRa2etIvkUFWg=w2640-h894-no',
  },
  {
    cameraMetadata: 'Canon Canon EOS 7D ƒ/2.8 1/2500 70mm ISO200',
    date: 'Jan 26, 2013 Sat, 2:05 PM',
    description: 'Skiing Berthoud Pass',
    src:
      'https://lh3.googleusercontent.com/_Ov0Xr_QUpmXUIRZzzI2No25Bph77LEZbptbKn4CN2ii9h5L68zRnjDvcw9WF6DWy270d88D1DlaQpLoSulYeH7hmbUWR7romtFMnglDYIYXcyNKG1bSxYSuJwaFDEJ1fcRTHX8rMewUXB5o4j0ZR5MP2Se-OOBhGuMg-2kKn4tdmwXyaLgsjuvz6uXV42J36MnCXY-IhzhugjHcWoENzdzT6fcNCfSBliwKWdJssT94rXmceUNrTktv68dYyh95Su9rNH99AgfrLy5V-bydAoh9IwxaKx-FI4B7-8lmHz3NYdyB_LrbaN21IzxByoBoKuurd-wig2eHUpbVCgPbkGIPMzS2nO3SNQz-FbWXDgffQ4bnTE4czZ21GC1DhIohxFmpsMFqT61ReyXsLoKhAtZzdlUORKOQU3qEQZR7sQiVewQ3QojAYWQZNdoeugECdajIYxQGRbM7IuDftCBdchwqNXoKGW1stNWNUiy_nNVuI2JQSWOZ3v6Rs5ia9bJk8O8YMbFquQCxjgghSiBOKueZfoVkY-H_BQmeU2PR0xCVyWzy-ZzRFyOS3BZd7RkD_fCt8LiXS5-bTFx8W8NzkQ0X7uVFFV8GKHDmKL8IiL21Isi9AYvhhin8uSsh61ap46S9JZST43F7CSF3wShg-7y3BxZm7dDx-inOaOhENWenmBgik5mcO75h6acdkKOB8INgacY9fLMrocCZXY0udcy8QQ=w648-h972-no',
  },
  {
    cameraMetadata: 'Canon Canon EOS 7D ƒ/10 1/320 70mm ISO200',
    date: 'Jan 26, 2013 Sat, 1:51 PM',
    description: 'Skiing Berthoud Pass',
    src:
      'https://lh3.googleusercontent.com/2EDfMYvpj635kNQJygGo7DgO-NsbGinq4nZlSv0bmGQxo1wa99ogPCFC59am2wPwgYPC4QBz-dhu495mH1r78i1zUdnYZyK4lXbP1seHZhkYYDO_7moG4an_s7XtB8ySFBHXohMZRQnEbFicjNtLws5lbyAQC0c50zWqHLEqbqgyhcCXNEz_ppnmVJdmPCa3G4T6804gcDYh015mnX_6rZnq8afys46CH3FfBH_yl3c8LVhkf8Oq9YY-ocG6mf0OLmLFlWLTuBgmo92Uc5_TnCmDYHSqzg67dXlde66HKTr8qbGwfaNZ5AFkya1m54t6EMvUQbd-DN7uzOCot252J9yEwXQDVO65TBGC3WJSlWHgB8xO1AbnK5RCpMqWFV4SmAAZwS-uJwin8PXvXwQTK75lyd5ozrTwu2KBtzu6IrmuA9Abov2bLierGsnPHt9sohcOStDLzTvMW3WRjA8SZhy2J6t7ne-tS3Tu4Y8lnKu8CvIbSNSFa1GgmTfN6RE2_AGk5xN-a6oS3Ncr0nb8mXq0fz6c2Ttryzy_CQwzcjzeBo-vpRKlyNreDrSefxWtIz7UZrazVBBB3dBwa2NL_c--Z14Dr86ytVsMFSMQGHqUzruNmjUPKpwqnDe-ZneG88NsmQ-n1ELk_xT8kUyLRiF1OoaWDsVZ81zOqqoS8bcGPLJUQ2xZ2ezhxTVhpbT8Lzdn_ZKNBur8AcseHO8gvKKu2A=w1460-h972-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5 1/1000 35mm ISO100',
    date: 'Jan 22, 2019 Tue, 12:40 PM',
    description: 'Skiing Eldora Mountain',
    src:
      'https://lh3.googleusercontent.com/RIXs4oz27Jm0lJ54-YVzs_0-_1tXvRe_S36PpZdQx-CoC-qmnNNFffGNnVX7ZGzUxDKmMVjeVYoA773b1pTglwNKMNP-r7gDVQa55Zeb-F_iaOsJJJ78Ukwc8rbWBBBZvABUFkI798WG2RLN4asrljRog_VLpoW7lDDdJFkA3-d1_uY8CMU_hil1GrkgGrosivbOkLA_iO8Pzaooeh-bMIY9SKYCVk2PD5R-OU0qGLEcdoviKO4AMinZM_IPiB-r5Hm4qXg0FSBaLGrM94RMn2G2ocXjKggVlcxTT8rjXcaw5WgWYaZzzK338K-uJsiU76i8EAnYQrRV2hMtMGBPgJd-DFQI5E0gOt8dctiRzNfiE0weWW1CNqJ72FgvhAZWJm5BHRumWXGrYTkeD0VHh4lPP2X8UdjTm2E22eLRN80zAPNsabotj9dQNtNcKKT5BbEF8PxN0nIg2a7vWm0ex6tlWrsT3hp2Aaug6jddI3_5lqyLkfgZ64fF9iAUySbjO-QxqBsvBRIU1D88XAZ8-mpwqu8y1hEU6Ir4VC69EptUvJ_nPbfvAyyOoAy8ypZ8HqQw6Rluv73sJRRjUPTsP7QOPlHPUn4GRxjOMKePmqw7UrgPUT0ITyHbZMx8ClRbSRHoqtjByowQ-71-oimqMwg31ie2jMS6-COh4ZvJLcsSajW39s5zJGbcrdX1rIZC57THrBcJJOwS12Jnhu1LhfnjMQ=w1458-h972-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5.6 1/1600 373mm ISO500',
    date: 'Dec 25, 2018 Tue, 4:48 PM',
    description: 'Soccer in Chino, Peru',
    src:
      'https://lh3.googleusercontent.com/DbODGnoCXfzZtSgnMzHutDMB5tmbKQbdIfXSe-tMHSRhCYj2o-8hYoKnXbXSOgGj6RHrxAkKmF9DuJTvPJXg7tuCAMkuWZk0IQ-V_cbd34BSqu1L8wS5Q35m8-o4m6noLbFWJbYsh3eeZ_dQ-6we7pFK-65mJtjTUuWiHXhn7FOyas-w_OEii85vxUxQAxl2N_XKpZD92jfb3gLanq90yqwu1-qx0XLpMFAXGEVcnJdFvQjPT4QKuSEqnhBY3mgeLJAMcwFYGrVnePLunsZX9NoVh2YzZxxeH5uul0kQo40NsTr77diT_ICfPRAKwZLKp_uLMKZSn7_RftMmEcASAUQpdLaqlfgemVNAfUPbKE0FCsESNi179MHCP_U3v9of-11-eINRZ38Un4tweHHnMCjQ0UOyU-wXi2Jw2hIPBOGYigx9jeOJ9_alf39I49TpC3C5K-eSseTc-WbCqwXJJAVdGISsmGO86-wr4I39MdVWkTnDPxZkuhVVyqVB3I5oQdea6w3Iqu4W-NKRiH0Fid41Ww3yh_mHEJEP7GdoVWkJyXgszhWkz01k9AhaRs8yYuUnJnNwMjK1W1UY379NFlOoKaa_Hg86oqqabyJFKvAAZBtkjglaFc4xCKTt8NBk7fxeebZPu4uti8z-HzZEq5oArjGlePPL0oSzd8Oo041DE-qWffPxtZJSsUOMsH97VF3CqLWfarZIknYx-XILQON9Tg=w650-h972-no',
  },
]

const streetImages: Image[] = [
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5 1/125 35mm ISO100',
    date: 'Dec 22, 2018 Sat, 10:29 AM',
    description: 'Street art in Miami, Florida',
    src:
      'https://lh3.googleusercontent.com/tbGZT_hFbhD5Bzz4Bj7LM-8LHN4zzCOez3DibK6jpQJfDeCbudFWnnK6Yiyza0SVdPznr536OpUzE4KDnTkrxChoR_70O1cwB7OXDyFNxKVBH_YzfFXQTZhcU8DmQydM1KEaGDeQClE-Js6UAndfSoq2vEB5wq7x9sSZtrgqLbO46kuL5ykeA5oTGoQEtTjykXFt9KW6KMlkfXrpx37EgldwD62mAeXfLpwLF4h2sAk1Gubm4OcyO75_j6NHQkyT3FgL9xnd6GPXHPPNCO-9Bb1X8OGavsGdV7LiLUDerldHH-1f82gHwXveP99KpXEwSEu3UTSo7zoCpZiG0tvPoGhGebzdmwC7Z1W2p1q1rEyOKSG5Vs6SUpRgIp0BZT6qI2Ofo5ykYig-U0BV3Mr3ZVZ1EjBCYAHWsW1otarNROw_9HO4iTsWNeF1IYcmDt8fBqZrcXnZD8iIaY2r0BlVUu_asP9h7s6-P1FzSJUGEXybycYfo6Uh2FiV5D0NODqwYnOlsBdlV0tHruiIXH2KLmwFyke0alR5rJkoHf2AUlT3CTJGN7N6NBGTGmupVSpPd1xXpVnxNtfMd5-iVZGefQQ0YOLnP4YSaKAghGOwGG3tZ391etBFGTyaJWMYs1JcHTXM7KAeu4om3IcDvH3GgHND_75MWB2JFy6TDXPSmlvYLPaj-5FfRjUqUSIFJUwSrT76dE0Jpecg0sd32imybVt6uw=w1458-h972-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5.6 1/1600 400mm ISO1600',
    date: 'Dec 23, 2018 Sun, 11:56 AM',
    description: 'Villager canoeing on the Amazon River, Peru',
    src:
      'https://lh3.googleusercontent.com/hCV5fArdu80GZ6ximwKAxsxfxUgP9smp9RbuLQ3BOlVkyblNIaephcgxU__03LlJDADLLfaQxdvWVf6chebfBA2rZiO3gp0exEA6HpcFpxDO_FFOneepyWNse4ClhIfE_poyAVReOngiVCEqg8btIZxpj454QLLpjJVbAorlTD2ovjDhM9Z6a9QRo4vDcnIb_SRrIjju_QsRxbAZZfhholPK31XZvltE6Qpze9wNZMaGOzPxkS1rZ_cQhWX3AQqH0XfzyJHNja49nb3wPzv5tKXpQsLec3XQt1QY10i5Nwuv52XQDymvTZwo360f09grpH53PKx6e_K1SiIceZo1UxblHv77UmFhgn4ja4GVWG629CsYueymhluUqwtlKsBpF2Nxxh3zjU7f5LcsxOEaSj1y6uWfQ3O2uFPLXiMX0qWucpv9BokOBmMfaKJ5Pc_1-S-PDp2KodM9E9jJwpeJkU99qoct2tGtSFKKdyb8-dKs3F8E2Mh7N-aWM-CrR3RhatZYaEguITuOc_wTrhVYoHiXhbxk4Fga3f8Gdvi6tWuPeAyW9u2yOiA0xpsfZOLCNZ_gKW6O1tKZ7E1Uf6IVi5q4vgwJ3P7RE17lk5hyFLfM7J6tK7DE3a8c5Ydi1cq3RGJ_yQojphJ8qMhAAWNq1HGR4VsXOAP3qdY3rycNZtJP57FRAoOD2mtmwWJVeK_kTDPcivuxvBwci1ELsuw8nDaROg=w1458-h972-no',
  },
]

const wildlifeImages: Image[] = [
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5 1/250 152mm ISO200',
    date: 'Jan 2 Wed, 2:54 PM',
    description: 'Black-throated mango hummingbird in Misiónes, Argentina',
    src:
      'https://lh3.googleusercontent.com/Q3yc0m3wbV_RMd_-XqkBmkNK5eGpUZHLAWeKnspKfSYEzafGEbW5GV0AGOIkvTyVZQk0-pnn53l_4H3ptum6D10Eu0qEi_ntvK44Lgav4s82u9BmyfD245eo_oERufxjelTfZxdALJ1rz4x77Gt4kf3TLudodgigRIs3-dfBA5pg4t--tiIURa1m8C35S6FPUCxbxPJSL6VArkUDAAdAL2U6knaBs67r8nn2nAVzqbsNZflvx5LIIZPhkKbqtOY8zWN99-V7AStrKv_iQ932MIa3RJdyZ52kDffjr97BLALks09kAh6TW2mUn8WENPDiWFsEJUEyJxJ2lYSYsdE5MyrcY6faOyKmwQ_0ezaV2D93fRYNclxbc6z0IlZCWShUA2I8M_qintHz4ec4F_p-atf01oQvZkYi6EzrNuKnYD0u_WaBP_ZKK-LUEKohEIi0DvPVi1r3a8xDF56U9irsDDylrp8CSFYmkaL52SyYOqfwrwatBwJz5KQZvhOxXWt7hhiOAkVrvD2z3OaPFWtxbO9cC9McXTH9NnKlSQFk5DbqWoKPU2Sqff8gQ02LuIQu-DJtnMCSgO71O90UR53HC809EJ3HdBu6_YaytRSzECVYQ7U7e0oDVkka6bYygWSdX7JuWSADgVz1m34hpayo5aGmQKVxwUtD=w2912-h1942-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/11 1/500 800mm ISO12800',
    date: 'Dec 24, 2018 Mon, 6:45 AM',
    description: 'Saddle-backed Tamarin in Chino, Peru',
    src:
      'https://lh3.googleusercontent.com/4nrlJJwzJlTKmnkUrKDIoVbP5iqIhRrssOZuGpB83gyZ8pTSrKZUWE7sXXIrlAa-6gF9MMK3Zliqq4ZUW9BcQALX9vaG5TrdGzc1plWw0GAPZHEXJwmGklfFvPfMcpcHRuyFgPw2f0s5nXRCqrzzKbQ1FgeO8h929-FXMlzMKZZf89m90TL2vsHT5fnwaGC7RNiCUoeYs3u8jVltw_K5w7dc-FDCHIHxurKYFuNPTrcml11H7sNNiw_Z54_w8CeL60mnwK8_Q4Qxlv4FFIGG5gRAXC3jAQ4qqP3IElbHJ6YlosZATod21phuDuLE4aPtFqVCvcy8cvP9lt5Np2EG5q9ka2CboO6UDvRmwp4oVQ7h4uHrwrSgB8YNTTzYShuXj2_l7KmVplxwSF-501ew3vpeizC3THYloSdEpa9cowO4393MsPjj1NMptuFGhfhZMFwJD-kaggPEoveVYQn-GHx08aTgQWTuzDxjQAFHUn4R_XEOQA5OHOtqfjeBqYQAzjuNcVG8zguesW48gSP4jaMKPHh14qdeKwb29yg-v1pVjbs4Hboo8wubHaItX_xKFzeVDXnNm73liEzgio9qsPC7ZBjpDi8UUZpByV5TVIDxOdpZpWBQ5URKvni9pruv84lMk9Df81v-wbkwXpP1oNXH5Bjmc4yc_ygp4k7NMl2ILGZorc70Ow4Mo0Z542Q6Uz0_HVD8dKnL7Iqko7vrUswMXw=w1458-h972-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/16 1/160 90mm ISO1250',
    date: 'Dec 24, 2018 Mon, 1:45 PM',
    description: 'Bats in Chino, Peru',
    src:
      'https://lh3.googleusercontent.com/7Ko-gSyDrWxOU8x1NR9w4tRPS6Wlzw2PUKB9qhItTlirzQr9mm7ZzZGyEhCBa84yjIxOtKIc4ehsaLyDQjDeudLiH0Ktcx6YkyExds9-wX-_HdibKSl9ZdCooCJjSUsOph7Q2-dntpLgCv2DDEyxQIYFJy0agugqbFm9AJeyj26iDjXxLrtr6dbN2nc1tFgUZzEipMdSeAInwOrH-LH_HmmZN4yu_S9yeyAcbpOcx7uni3AfFE8gmcXwUG1sLk0c3d0poH0I052CA4l5Xe37GLRuf8WfDHgnmWvgmfBAKsuU26dLlpJ09ePbffSU2Rl1O1PhiU8NGFoFSHQEjXG6w_6m5OP1HJOA71GAB92SKYvhzw80ywTeu8OvYkt4KVvoRM7eXNLixObFmU6Rc_8wGnVtpA9itEssJ4BHNUFSzgx3G39xBDBDlaZlMelMsZgt2a9uejIXjSKxgs2ippCpmt_QwXjRb8AJblC9_dAfISEg5KSFAPDX5KqjpL5bgEfN8CVrzWAQZilzbHBbKO0SP8RXln_LZr1I3uYB4d7ZjzUHSfaGW3TyvngQJ_Sgo-Bm9uORBlgSDQ4ymKxF45t5kAJ_v3cyVhANHPxeOGAJU0Hag2swHcoIXHfb9pEl2bHYnCKoF1TU68RKsOgj23Yogj6VFgqCneUMajnNx3MptwuYPQi4tJEeNSsr_NNSASQrZhDbm_wczRN6n1uujMb_utVGGg=w1458-h972-no',
  },
]

function renderImages(images: Image[]) {
  function createMetadata(image: Image) {
    return `${image.description}

${image.cameraMetadata}`
  }

  const imgs = shuffle(images).map(image => {
    return (
      <figure key={image.src}>
        <img
          alt={createMetadata(image)}
          src={image.src}
          title={createMetadata(image)}
        />
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
const Street = () => {
  return renderImages(streetImages)
}
const Wildlife = () => {
  return renderImages(wildlifeImages)
}

export default App
