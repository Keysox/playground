import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import { shuffle } from 'lodash'

import Header from './Header'

const ACTIVE_CLASS_NAME = 'selected'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={'photography'}>
        <>
          <Header text={'Alex Kessock Photography'} />
          <nav>
            <NavLink activeClassName={ACTIVE_CLASS_NAME} exact={true} to="/">
              All
            </NavLink>
            <NavLink activeClassName={ACTIVE_CLASS_NAME} to="/food">
              Food
            </NavLink>
            <NavLink activeClassName={ACTIVE_CLASS_NAME} to="/landscape">
              Landscape
            </NavLink>
            <NavLink activeClassName={ACTIVE_CLASS_NAME} to="/macro">
              Macro
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
          <Route path="/food" component={Food} />
          <Route path="/landscape" component={Landscape} />
          <Route path="/macro" component={Macro} />
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

const foodImages: Image[] = [
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/2.8 1/160 35mm ISO640',
    date: 'Dec 22, 2018 Sat, 12:15 PM',
    description:
      'Roasted Cauliflower; goats cheese, shishito - herb vinaigrette at Kyu in Miami, Florida',
    src:
      'https://lh3.googleusercontent.com/FkcLGLzzL_OkUzxoEDSJ_h1zECl963AQYDR0qfMLQenxiFua0irzXkk9iLMBtJtmwTDKHGKFXahJKmHc1MnO4bhSAY8CugDfTQIghFhkMQ08G-btyUlKjemcAiZ3VMbVxyqB_KBR0ow2xi4vPps15hxWipRHOZpYjR7PzNDI1oTdrsc7LaSN2Jpy7DgtSuhBakABORUMS9L8_YihayVYmr4psf-iAqx06FaPdLmopsm0IpjUEEvcodG-rEpAmT674ATBQKgN6sVV28i0nJW7teNvmv0B5ZPvy5QjsZMW9tv1znaN2o6LZkgtSClqvuHu43HNMNfXAOM08iChv64sCc-w9uZRlmHUO6QRkOWDW9zGPuOBWth4XPgl7e4jfyrQnpOUQ_IGEcmu2TiqpmVh2xXtVmgrx-8BIEFEC-FK6uBkimuBhpOnMaCSr3-c9_vdRW4LNwRhXBFF77EYV517G4cJOE1pg3l66-RYiRPxh62tLENYPAaKiW7jMUPg88fOX0VKT0XmTBD1i1b7iCLK8d1ZDnHnqGpPUz-650cPCQlgG29k3i5YPhosRK7jC3aVR4nt7O4i4EXe9EpNoWLa4_Cw6xb708-SsMWSfseX5D9OtZUEJVZQ9UkjWpb2zjXSVNeYtXkn_rU_54_6CWUyVccQNPqVoHmim0Pnybtph6EdztqmTvM_ChlTpimU7GKzt173VTwwS3EUvCSFO6qYpHlaUw=w1462-h974-no',
  },
]

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

const macroImages: Image[] = [
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5.6 1/250 247mm ISO10000',
    date: 'Dec 28, 2018 Fri, 3:55 PM',
    description: 'Spider with baby spider in Chino, Peru',
    src:
      'https://lh3.googleusercontent.com/b4dQ5wmUgCK2suO6FoDntaCGzhW4pcvhxXwN_If9xbkM0Mgp61HX-NiUg2RML6MY6xsZ7iG9CRh1Wx3805ZA4tOSlqorTQ5V2uSuDB1zYNspP0V4EeXYdEMnv8LpyD93MNRa-k8fginQITulVtxbAWVPtds1ToetDHooVaI62RVpGWEjN0DBErN1BeIDw_3xdi1NNEFp0m0H4XwjooZZi1bwcgrBf9fGYeCbnXzji11Kx-xmgocrqaHtivAEM8EdCUN8sISt1fwSB1RTWhtYrVR9moE5XMVIQSytpS8UiWhEeI0f9KUC2acwPyea55uQOn6szyk41h_rRuV0dO3E185fPpuyHfyxxw990NQWlpZ7HP25SjM8gzjOLBvS6TRM9tfG-gquflIe21hFVOlg18caCYIlcTlLyRK76A-fOeG0paIVfzeEm-KV_MeWWDJvcQ_T6_1099UcrEuMSiDFOkA1PeqPePs0Qlvt2ahhgNQCeXarEjzYzxNmhTyFsnDkXrO5HCiYP6_uB8Sep9TzJlwYEyuVpj5ePr32s-rXQKrj3Y8VNqJDLAtfFQOSSfhHqEF49nC23n0ui-Ct-bgS9yyIvKu0lp6YQ6-T723ZeLuyf1fFIgiOZTfZUelWeZyYsWG-LQoeZQ9BTQEnTTIQ-IJqhp_5FYb6z97x_gcdvotnxUs6-yRHAE11JpnYqbW50LVlN463F6S3wKvykn5C7eOH5g=w1458-h972-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5.6 1/400 400mm ISO3200',
    date: 'Dec 31, 2018 Mon, 11:31 AM',
    description: 'Butterfly in Iquitos, Peru',
    src:
      'https://lh3.googleusercontent.com/KYQkXo4umx2lwpLDr3hY7i3B_mTgObpg09V1IHF8WeCAmkvZBHDhUx1NUA8vt7U_0DJ3S4EwWruW4gaXo2PIjY4lNMaqfDZhWxYJZ0iQ2GdlSbxQ1bx-5lAipKPT01WD9FPe_mJj3kNy5oaimpZw6yhEJ_x_5S5P9pcsO8U-40U2kLul8-1su9ADCq1hnKj-_wNfDwVnKtrPP3I3GLhhvr5xdNs7FBfWPZ9EcXsGJv4ei9h3yn8zycfXfRYwcPgorZvJxDZlxlvf4lO0-CRtYcyvAHHQgK8P42PLAxLFaABT1M2GQZ4UP3qpHYLQSo3MD23T9aFRoCp60IVLJbb1bKjqgykjmZvu9-z8ybKGzscSLs7zyzOml5i2E3EHn91zwZu2Bisz-P1kvZFOmTQNr11VehtcvK6qD3UKk278MMki3jc_728Nh34jDEfKcgA7yqPzruU-Xd5Y8P4S_15zX_blSBqn0gg8_0rx0oyJe1HhgC4Lb-1eOouz70CbppqJA4GrFjwIE0iwGhhrFt0G1PJlyJsHpmHzb31yIVewXSdOzYewSyZ2UsHGQ3ZVEg9DH8LMHO5UUdjLdnIPExa5nNsmcppu2YFsjXnJQCmtfhTYqW-yN9MLUX4SlpblZf1GO4qgI5vl3dGOzEyQDt5sNC33JVFgfQIiqQedmjRyzYwNUlzfRef1X8usr5uvlomrdYf9UBb0Hiz7-no8MwqcLT1GOQ=w2640-h1762-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5.6 1/400 400mm ISO2000',
    date: 'Jan 2, 2019 Wed, 8:09 AM',
    description: 'Dragonfly in Iguazu Falls',
    src:
      'https://lh3.googleusercontent.com/N97Q5VGZcMcX_SnlgIuea8c_eAJAPTVDD-C-PeRMy4lSXk2pWdJ4HmsIc6y9NrGAMejyUzEElTxdxoUth8I8_rxHYbvS1pQSOGckig0RgxHzFjJ_wPvu_Hv3Gr1llf2-mN3eVYBcfw1yDs1G5iEBQd-laui3TUcgfs9UAjWRTJ_gwhzNIYlTcEghJvd-xPm2ZIWQLaDk0CAWqRrGGcS38xr0CNnBPdL6V1xFSEDq_ydTH15jsMVqj2nY1_KUwxkfBg-JqkJDTPwq2hLfhnA5WlIZdA4DzZz1Hi5Wk-lLpBPzRlPopDkltSvXcZJ56VtShKoDwVvn4d0m52q2pFUASV-BcJoa2LqrP7H01zPC2jTlPfKvyZmu8xjvpDaV65AfiCWXyJLdt1nIf0Pk7Q5nXwWN4019OcxiLHc0xhmmA4ybQkXSGflz5L_Lj2-xvfbXlWp_PRcuSVPNXhX4gsv_WGs1ZXpfh_lgKz8jRGQy6a40ajor7NcRprgZEyNx7rEURXJwaUcL_4sjG4eKaQ4G6IB8KFCQHdxbVvMTJ_w_Jpn9-GrX5YpL0LUK1m-uCuQ1GJYMaf9F10CJIU5ECbN8_vFpi2U6ixd0_kLQhgCylRzY3_D7p2qaYvEuRuQ7Z1a66gyGC7sTb2dkcc6JA9PJzpV2EyPGzbjJrO0e4mhbkJO8yqZmBilM_iTCXyiboGONtzfPFcG6Wd6VpiFqpGQXIgTI0w=w1458-h972-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/9 1/100 90mm ISO1250',
    date: 'Jan 5, 2019 Sat, 8:58 AM',
    description: 'Housefly in Caacupé, Paraguay',
    src:
      'https://lh3.googleusercontent.com/4Ec6lwCemhd97ttoR1h-M-nLf9BAwzG6jq0RzfSWa86ZRmNlowKr7x9hJvM-jkcKSdBIosPhiDf2lhRuSp_8S5RC_UM4zIUYC5Cfb7Nzhqjk6eTuwoaGtatFaMm2TrLu7dLVuZiDSf46CjjlN5cOKRjuKHu38f8p9qO5K7ttZFcX4HRZrn1Sq2PeaggNpemrlFEkEOEcEq6RYsGHAPMgoTqynzeAq2C8cjW8mfr95eP7DJ5yudaCqqzKvpgy5ul3dvlHYFjH1-JiEw1L6K3DpA3cggbdjJ64FOoHMzatwumcwbsx4r_VHdDcenpCAdk-84mCZjv5JTXFo8e8agZkCIL084LqML8g4B0fTeHqOebtC7HV9phmNJ0wWQ5mfVtsvnjK2JKlACdxT_LL_ZcLb0hTmrImhGtIW8D_BBMBYsYLRVp4t-w861EAFmv8L1rwX6uPM1Hcu02AcJaJ4xVdBRW30P14_oIgQJ39yGVLQwRXvmlCwOm27ArnYfoAJrlihA8do-prkA0pCzqHdJmSTYslnA4D-YCkT5nYDMZAjQVB6991xajhHF9Z4w9H-gPp99SFA4fxefYDR9SLob1InattHHYjVitoWriXZfGRk9RznSoUrD5Ngh4QS-s0BpXtrbu4zYN4FkbtTYVOji4O7QdOqBUfO9eKS-JAO5BdnnBadkEswbkdw1NeR318MNrl-DA-Jt2v0vAwKuTLNB6ngK_DKQ=w650-h972-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/6.3 1/100 90mm ISO640',
    date: 'May 26, 2019 Sun, 8:39am',
    description: 'Ladybird beetle in Lafayette, CO',
    src:
      'https://lh3.googleusercontent.com/pyukFew9bcF8Xyd4JMHqlH4zOkAPP9gww2liZ6NCSMHppSQaxE2vj_-rtWQGe5RbdQMjj8utxUYPRlOijjDq1SViAwdPgaN103FsiNNIxUqs7vEd7bZWgyoFEv_tdEF-sETgvqgc3xyxRb8lneLDbBkauLdQ9ZrjShCpHqf0EncBCH5XijiMx_9GSxzXgb22LrTTtuTcFXTLZbv6VpPKoohzXWmdr_yit3vLdrPV4ZDi61Bt0Qu40yA5HcdKyX-9m6okH9z77aQX4lYSg2wA_qGhU9xG8Z8T1BpzAzQ6UVyYK_QL-stWn-H54s5kxz1hSEsWkeB5wmhJCM3tQqrlk57JkK8KQETJgBxxPyjme7HcgU7QL1ewRxvekOCUpoSeFpeH3DFfGIB3h7ygThtaNyAYveSVYes0GWkqanCSYh7wzk1tfBGERt1oMFoYKW44IFZnhUiUdh7BqsHySVtipx98T2C5MDEQQGRzj0t2hD9gecK3QNWQkALStCii2d8CWWQXESBkvT9B8saXLYxzg_0C12uQ4da0Yr87OmE0I-ZWHFtwMcHPgg17XW39XSTg1dxOPfKjBeDXat6njjqBkQ0tw6z8iCuwz79sS_Ap-xcpcIhO5szWnIHd_awg0d6NyBd_q3ejTurpZ2N_y7z_baV-udB6DcdMEKKZ-tATzZzRb8wiIIbfOceOJd_R9NqbE1WQnYSwqo08N5ZmRjuYUdqhjg=w1458-h972-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/6.3 1/100 90mm ISO200',
    date: 'May 26, 2019 Sun, 8:41 AM',
    description: 'Long horned beetle on tansy mustard in Lafayette, CO',
    src:
      'https://lh3.googleusercontent.com/sb0BJ1kfsyBF_rLhENmN99JuFtt5ijek6zmHVVgSiIm6QZGBo-yTFfkEs23WkjRucQ-YvrE-ntwdyClPKE3BTjFtT6B6akexvAeVBvkzgvYkdjoF99rV-FgIZAl5_n3YaZ8H6y5wHKtAgiWQfBYuIgqIwYG5BEYHIO-TesGIzgW8zSXLt3XcWBPQJnvKuNBDcD6otcB894QTNrfOfyPjn7ftKkjMw1NAqdeXIpJZ6hpyn__k0qCvS84lmNqypmFIVlS5-4RWj94R_5oPIh8nm0OgzkHPKUnVtjcK4TP-w83mt8ARFaQcF1i6V7UkxOb-yA8LIW1UbD5j2s7fisJ5EkVeqLiFdu72Y06uXaABnFxvchDwtNe35yRgzVTuMrjKwVkYXdLF-OIqpEbBIqaqBzUJHeVR4j4ZoZcWSB9hFr9GmB8vSA3gTIfXzFXsga49xPFWJY9xGpyJm8la2imYbA948acYD3JI5RcoG4M0uGkc_nw2M5iRGc9rO-Olc4e9_8LLh5F-2Db8hw7ur03SF4oikpGWMXHcTJcvwvxvSYeJbCoNCFqji_f9DjK1OEPPVAbYjJPpLZYGyShV416oynTrtHDrmpZ2HteW0Pc1zuRqWf6d_KpyDXs85RhcFJ8_qXHsXQxIaiu3nP6rwdbeq8IsY854evJJd9toGZtqol-byMWAAlwz7aRUfLTYMLiLOnjS8Y6CDdmSlxby0R2uE9DdRg=w1458-h972-no',
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
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5 1/400 35mm ISO100',
    date: 'Dec 22, 2018 Sat, 10:18 AM',
    description: 'Early morning in Miami, Florida',
    src:
      'https://lh3.googleusercontent.com/sBr9WMl-V0eSpZXn1eZLnL0DZ6Vqt_bIaUwNbfhvn0gb6ENI9FpygIhLWaS7Da0JJJy6hHF4PSMVjdm1BSg3j0FCl0NeEdODEhBF2uel6LZORBX2BrO1YG58dNbTTNjW3RmlllVhrO6QqTLpuaoxFpdsLl5vhx7unMKy6-lwv2knY0fQwyhR_RRRHyX4Kx_nom7isS9-ZfzthHi87uG4PdxJkSAWrLJgWxBtyk7xyLNmLhCLAYDf0mAmftg_2cnkh1sdvM1LoMDEOdLCAV5dic-0nuCsM8BjoUe9rIE0suXFLO8jc9tGXwfZTnVGanNOY4RnglNJtDxBmoI-9ZFOv2Ou9lNVdZ7smQVITOXaz5jRFlNVYgcz-OCKXOWUbLk7XI2KsBD06QgZy_AnWlnEif0o_e5OSCGa15-rN5mKTWXuyt8M-ryhb-jFbC2f6Q_dtHuc2I9BP4sbJKYcbsEPKuIvA6c0ETo8Z8PgTwBjmwu0J9dks_WoKb8vjFLbAwJHSjrhoqdoy0pRFUJjOF8OkFFpw1ebmvYmnRtMOm5ks8tPoHXBZol756JZNqXAJC-2dF2nVKhAmvxb0u5ioin-1g9ZPp5P_BPPldFcq1kz_Mrmebdg_xY7W6rTRBBUweYqrsQRkLvMGyNlOMAcZRran2B2vaNZ4GDZX61D9uaRe4QiQl6hH-tCyDsAfmrYrwmpLSirG5xAf5VmHYRpRsSempi-Nw=w1462-h974-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5 1/125 35mm ISO100',
    date: 'Dec 22, 2018 Sat, 10:29 AM',
    description: 'Street art in Miami, Florida',
    src:
      'https://lh3.googleusercontent.com/tbGZT_hFbhD5Bzz4Bj7LM-8LHN4zzCOez3DibK6jpQJfDeCbudFWnnK6Yiyza0SVdPznr536OpUzE4KDnTkrxChoR_70O1cwB7OXDyFNxKVBH_YzfFXQTZhcU8DmQydM1KEaGDeQClE-Js6UAndfSoq2vEB5wq7x9sSZtrgqLbO46kuL5ykeA5oTGoQEtTjykXFt9KW6KMlkfXrpx37EgldwD62mAeXfLpwLF4h2sAk1Gubm4OcyO75_j6NHQkyT3FgL9xnd6GPXHPPNCO-9Bb1X8OGavsGdV7LiLUDerldHH-1f82gHwXveP99KpXEwSEu3UTSo7zoCpZiG0tvPoGhGebzdmwC7Z1W2p1q1rEyOKSG5Vs6SUpRgIp0BZT6qI2Ofo5ykYig-U0BV3Mr3ZVZ1EjBCYAHWsW1otarNROw_9HO4iTsWNeF1IYcmDt8fBqZrcXnZD8iIaY2r0BlVUu_asP9h7s6-P1FzSJUGEXybycYfo6Uh2FiV5D0NODqwYnOlsBdlV0tHruiIXH2KLmwFyke0alR5rJkoHf2AUlT3CTJGN7N6NBGTGmupVSpPd1xXpVnxNtfMd5-iVZGefQQ0YOLnP4YSaKAghGOwGG3tZ391etBFGTyaJWMYs1JcHTXM7KAeu4om3IcDvH3GgHND_75MWB2JFy6TDXPSmlvYLPaj-5FfRjUqUSIFJUwSrT76dE0Jpecg0sd32imybVt6uw=w1458-h972-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5 1/200 35mm ISO100',
    date: 'Dec 22, 2018 Sat, 10:36 AM',
    description: 'Street art in Miami, Florida',
    src:
      'https://lh3.googleusercontent.com/xO2YadYz6mUzihzrMrF5yEd0wfwmMLU-T44kz3SrrtHghuvC6NpY5_mziOK4gz2BoK0VqhRBPhggEgh17ahc4oT0o5T2YGNGYOwPSYU0UG36TncI8xOSb7mbS0JxMeJFDVgO2FmwDj7YKS41hBfLQBi5UDSIrSAKyoO3h0N5BSBgIK2nUlsibSYPRlhEUhXzIWTUphg0atGzfAQaQV5geS-B676973BcZWp5poM9iSaTr5Qh3d6IDJjxO2NJgwzJSfrjgUPgll18tCQLllot224uycv6kQh2KOlS0Nq646IVABcF7bxbAPvfewWYTzU_-0KVTJJyad-ewfUxA5kQ8mhDXI9Di8gU-46udRtYhdEGLqEaJt88fQih8wcdFBC-2mD-QGxT82Xkd22wsALzFhxP6HS4Uq5V2EAL6z6tyENZ6Ntzq1tbz77HI47wRCYA3E5HhX0xW_yGUQ6QHQl4D6esKR64ZGLLhJx1WDQffevCqMxATZd7hM7nJn2rA0GrnC6_7Z6CK9icwwG45qi7LDTEx_CmcHP7-nwzDSnCI-q5fbP1Mxlcwi2IZNZhcNATkD0TK2UcqEdRxmxAIEAfjYk7SHHyMUkKCUZTgUGae_NRr77D9BN6FWTJHlm6UcE2jxdWEHS00tjUJ_YdpZaWUtgpC5B1MdIuunTOJz7oUTnsTHCjLP5uoavRAMa4zCEm56stCRulNQSdFywKY7FgM0YVTQ=w1710-h974-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5.6 1/8000 400mm ISO3200',
    date: 'Dec 23, 2018 Sun, 11:41 AM',
    description: 'Life on the Amazon River, Peru',
    src:
      'https://lh3.googleusercontent.com/kaMqxAk0LCdGzET7Iq0LafBuFzjFElAR7uVzJYngn5w5LX96R2Xgm2dTsbmn94agKbN9Xq8GUNTeVD_Q_fFdapexullFn1V_ka_0NX4EHj0M_z9jlMxAe0aDkQ5uP1IoGSbvWrrdvUGa-nKHAXrfc4cN0zDnGBgmdfhi4ulTdIHhKSZxua74DeWFTHyl6vW5wFjWvpEtXJuxingrtMDLpAWxXa8EBlO7P04E1WvCkkat-a6SDPb3AZBZB5DXntANEYKAY54JXqAfdD5G6XQ9-5tJ-j0mpCNcaPHTiw4Qw2GRsSASWGZnQZ10I22L-6vZjTjvo9oe63YXLhBBjFg09xQLoWXT7IyN4UtofAePmeXiyfTJKOpikRvWltS9aAzSat4HRAPaXK_5QfaLim8kylhbut3pX_fPLQ54ZErl2a1CBggFQf8xg3BsabwUOWU1HsvMIf4BMcAL-oFsnL8Vl-jumnbOJbPVbRjHUwnYQtS5JeNmjUvO6_yHyUdOex9ptLArB7CnUIfLefdLb3EKSBhfzz3QFOt_l1NEf5Egb_UDdq6iklqCZEaQcsVwSmnh4VZAOgl1oei05n_wA_x5xI9Fd1Kt8WxCwNbpQQQ3rDBb2cn6jRV5X2NqHqk-Kjt7eXnJmY9JDfT3OtnCIiMbz6qHl9FlyqWzt_W4CDnjAm6qjdGH6zXVEg8sqo8MlihNBpFVzL5vbIupnnv2xA7KLxTsIg=w1462-h974-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5.6 1/1600 400mm ISO1600',
    date: 'Dec 23, 2018 Sun, 11:56 AM',
    description: 'Villager canoeing on the Amazon River, Peru',
    src:
      'https://lh3.googleusercontent.com/hCV5fArdu80GZ6ximwKAxsxfxUgP9smp9RbuLQ3BOlVkyblNIaephcgxU__03LlJDADLLfaQxdvWVf6chebfBA2rZiO3gp0exEA6HpcFpxDO_FFOneepyWNse4ClhIfE_poyAVReOngiVCEqg8btIZxpj454QLLpjJVbAorlTD2ovjDhM9Z6a9QRo4vDcnIb_SRrIjju_QsRxbAZZfhholPK31XZvltE6Qpze9wNZMaGOzPxkS1rZ_cQhWX3AQqH0XfzyJHNja49nb3wPzv5tKXpQsLec3XQt1QY10i5Nwuv52XQDymvTZwo360f09grpH53PKx6e_K1SiIceZo1UxblHv77UmFhgn4ja4GVWG629CsYueymhluUqwtlKsBpF2Nxxh3zjU7f5LcsxOEaSj1y6uWfQ3O2uFPLXiMX0qWucpv9BokOBmMfaKJ5Pc_1-S-PDp2KodM9E9jJwpeJkU99qoct2tGtSFKKdyb8-dKs3F8E2Mh7N-aWM-CrR3RhatZYaEguITuOc_wTrhVYoHiXhbxk4Fga3f8Gdvi6tWuPeAyW9u2yOiA0xpsfZOLCNZ_gKW6O1tKZ7E1Uf6IVi5q4vgwJ3P7RE17lk5hyFLfM7J6tK7DE3a8c5Ydi1cq3RGJ_yQojphJ8qMhAAWNq1HGR4VsXOAP3qdY3rycNZtJP57FRAoOD2mtmwWJVeK_kTDPcivuxvBwci1ELsuw8nDaROg=w1458-h972-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/2.8 1/8000 35mm ISO6400',
    date: 'Dec 23, 2018 Sun, 7:43 AM',
    description: 'Early morning cleanup in Iquitos, Peru',
    src:
      'https://lh3.googleusercontent.com/bs4Lx0thvlmIwqJ2njz3tzo1Vhw0-QlRh5pTLQG_IN3TrQMEQls-tHQE1CrFOu1j_jlwX7FsKUbgJz3wvWaDmhS7ENgdhu7yS1BDHwIj-TUU2jt3I5e7crRKGynhPDHXKwxRk5hlT--UchstyXoJl7hOmnMO8AbNu0s8DFVjSduI85WyMsqxoNiaf3yyNqo5Wd2517OtFvlb09Foml8dzHiwjLoxRlQqMeUFdKhBcB2TmukfjC6dz7jBkRoj5SDh9o6Ki7y9XTXHljduFyywfiCG8GZ1WMWIJ_kwfQPonEX-7sehTjIneAUPR1-xJW_fdof0-Qz5IpEECvaOJDTLOKKIQPfF2HTShzToaHgJgiGyozMGMPE7NU0V-mYgm9w__3z22u4F5xxohl7cTtgui17MtGiQZAnVbs37M7ACfzUyyEXyq6TC847nOqgeZlaaAw_yK96YOh-QBUPdIRHR94qiecSIsBG0lD3Vfcj_3k4yqLjht7DL7qef8u71NPUH3S6bQaOp33H1wPGr7Iv4jTztx5S7mVUCR4GH2pJ0C-1-Z_VAR4BJ_tMD5_m7iw4n_jxpY5iVcx9sNkY5jrrFJe8SsMiw8xk9VGJmvqracyEPRP141KgtZ2bHaaTfe6XVSsGN7E3fJgxg-XyoVRQbkafDHSfQKXWOxpmguTA2nDp8LqompdvtAbeFlwbOgjXCs1N1xGzCu_ByFpCUr9XUTHBl3Q=w1460-h976-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5 1/160 100mm ISO100',
    date: 'Dec 25, 2018 Tue, 5:28 PM',
    description: 'Playtime on Christmas Day in Chino, Peru',
    src:
      'https://lh3.googleusercontent.com/gRMTks620Qp_tfyvrUug5lUSBbDOXRoByCYR6UE-IrvFAK73YUB9N_6BpGE_JsyjMx-eAvyhgKnl5DK2KIZgHhnutIl-cwqH3x42VUY-x6tfz05DXzAm9txZYdX9aSUrCeUXc7IhgDMV6ovsEKi8qs8XjzfH6e2vZdRITXCNuP1iZYG-lEU-40TlE-2ngxMejLmY0N7J_KfLuQKE48iaPqNdqbGlVdRuOAurChOLiFXEFogXtLQHCw9ls-ARr6_mH9r6EdH74ZxsD7qX8BSBIrdWzDZwIAd_5S1Md2r2Zw6WfCU7JIKm4sor3tISDlHxbMMr__v8y3TSjQ8RGqsleEHqFf6KL2XyGkgaqFXxUdfQM1FcOwSAkwTL-hHxQixABoStwQAWRVZzGxkVTj9l51NKt8wmwWgUrgd-tbX6w7fClr_8mOyN1mot3PT_yuodHDYN7B16Jrz2kEu8Rs09F32iMEZXBQkaXny3jnb7Qd0S1WENMi5Sz9mwHOtX5Ocbv_5wnU1E3EsCoqcXhw4pLGOMyRhzmMHpxdlsETWEzx4Fy3_iINgJoBJbVjT8k0Ti8-AuzZhjaJoBizGE9ZxRj1jXU7vmUJKQ4Oj2lJMkAqe_SX6IbEdx8iDwnReCmVrDLFPmCuNtrjeHwdT5Wx1Lx5N68Q6WbYyK=w650-h974-no',
  },
]

const wildlifeImages: Image[] = [
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/4.5 1/320 35mm ISO100',
    date: 'Dec 23, 2018 Sun, 8:25 AM',
    description: 'Gecko in Iquitos, Peru',
    src:
      'https://lh3.googleusercontent.com/KHcikk_CsChLaenPInMNVEW3TfEF2CY0XgzJEn1drNtyoDSvivUaCtmLM2wyWT7YldcyIDFagUCzVDTOyzBpBcHgzanx9FXSikGE6Th93-h1Bz5aKdUGl5RwED9y-uaGqY9gECbeQj6O5UKU__iXRhqyI6S3jNyXVTpd9sK-jpt60XZT_u3VUhqShgAtfwXt9TumgX0uIa4DIzYAAkDk42CtrRHdMGg85L1c2CAwQOEUi9UpIFm1e2lKBQ13p1-YCWsyZA8WnjIucvHr3tyEZdIV-Xyt-nu5jK03fvyj8MSTtH_BR8yszakLmlOpTQsdtpKM8jYoyCMvwD9SRcViGFd6U0LJ9G4mgtHDvU75vpaoFQiREP1NORmlUKiBtM96EkVl0r4ck8GLsgNZ_lk4sTpJzfYyTh4HPPDs4h665g_60Rs49BHoncR6XjUAUwYP3VhV2-H5wH3ymykO2LbPeQy7g7kcMvxtw0p8o3p8QZ3Pf6NDNU_y_3jvwlp3-_DurMCPKbQ_XZAMrMeJXAfOIXel3WucS0nXW4NH4uLdFG_MQg_vYrR_LwOGHys8u9pxmylzDdsq1nMn1Li8uo3tw9L6LJPZtcIbg-gd9t40QejRq55lRLZTHJ57Qj4wzrse1zCylPxGd-wSd6IBswouRngyebwrzdVj7aekL_nwhiPW1BlentihV_xqlw2iuVmJq7WpKqsJl9jSR5mqBs_1w0yzsA=w1462-h974-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/11 1/500 800mm ISO800',
    date: 'Dec 23, 2018 Sun, 3:24 PM',
    description: 'Black-collared hawk in Chino, Peru',
    src:
      'https://lh3.googleusercontent.com/KoygYQXlIU2OwP5pLsD95gE54Ongs__r8k5R0XDicVCk8PpYzv7_5HLqi9_yE1yFAfgNc193QtiXcR2R3vVnRc7TFunS5CWbT2TfYREKdr9W4-qUlF9nGl5I1wse-OdG3raU21Gvq85NMSvhLo2DbmLPmNKZvkLzbyRx2Yr6IHOyo-U8sY0Q1PCHA6zqQ1tWyDPdGNf3wx-xg-n5LdoFuQUTMjtT3NbrQSzNDRfQGnPtSa5wfH4Z1ymMaLKD8lRvoolHa4vchrLNg7xggHnXA66Y0IKQ5TbPRtLMlCrpqgAHnfWymitxF3Gm7bVcZzj54IT8QI--L3inRXecQokLGiQVIN-fTDgOLszsK0ZcsSbMjKjf2kGX7FLQRUxSDee9VX0kgAYZDu3RDfNJUvZbZx0ZBCfxA9JHrtDtOOmPTORftyR9DszuPbte42Lz7OliOPE_KoYOkJJfWYlhE6WV6R-ekUMfqC9aYaSNHrS09iXuW3zAkQDR88RpQ-J16eDdVj0ZJMiaTmiY2K6J0soxlqZ3WsRF5rjJaWmDPZqVp9OkZm2ywR6zPymRpk8Bk46s0kuVwIKWJGA6xdPdKgPIFg9i4hp6d2S8PeQWx5qGlXjQoiU-OlU1tAfmFeGEnmOttBVE3JI-_e7Ci-wUsU0nvdXkyP45lvaVaDPijKMmT9nAlXk-i0XJIaYUocQJ2WTr54hTOofu5-lPKJf_PfU9SFenEQ=w650-h974-no',
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
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/22 1/15 90mm ISO800',
    date: 'Dec 24, 2018 Mon, 9:19 PM',
    description: 'Amazon tree frog in Chino, Peru',
    src:
      'https://lh3.googleusercontent.com/rehu8MTAlEDbqgdtHV_tJzViklvUo3WHlYa0dC4l7VfE5b0uj2jU8SFObxpy6fxQddef6LKR6aSpOxWxsBygi9PFluD_u54-SGzItpzYE8mPLSy_pN0vkCvPQAyWyjNfx0zDG8hPCNYfSHkUsYskWMeWO8jRIq878Rcnt8g-UslVgpwGZb5bD6ZzD5Pn9cVUcuVHHyz6o3R0Ne7j7SXG-FAgn00Q9MYTrXN1JN0Wog-iOA4vBNymYmA5xja0UeScU0kHQbjVVqnBYCrNm7SWC2QF7bmP5-rpzRQRflmEjT6jS6YiUyfRIC0wHnzdPp9f8Fpnyg_Wlj3yNeD9KB55QKHQAg6zDarfUgm8bi_TW-TaXYF4XM78hSZ17GfXK5uUgK54l4c1N7FQ228GbX6TFz8_0t_lbLZoxYeBd9Em_7vXa3301MmDF0nKPHe4by5UOJ9G8issWD17wafZ9dQAPKxn17pK0SMpICqy2FPDoRYr4Cx0u-zC9rDVss2JfITsD7k40QegDQ5qc2gp2DTM6LxCbcGxokBxiQG7OLeQDqsgruZUGi7KsGjerO8A11f9vqr1LWxhFlVl4_EJtF6SwgdjliPvfxYpuXI5eaKi3uUkl7sbjN6vDW1Ti3UsSyt3JW4Ai-5B73qvDGg4jAcWbscgSVXMfLciKblaaenWGrmy0upV0U3wKW2IuxiF4IIv-GY-mUROKG4LYsH6I7he_QBSSg=w650-h974-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5.6 1/400 400mm ISO20000',
    date: 'Dec 25, 2018 Tue, 6:42 AM',
    description: 'Black-fronted nunbird in Chino, Peru',
    src:
      'https://lh3.googleusercontent.com/plERugsYngDpQsD-Is6GKsUb8Bx7b9GvApZFMs6hc3m0swNMu9q8epCY5AH2AeJ736vNQa97adn2qloeVxaKAkMKWomZUVNw-9hR41cWF_0k-eV73u5Gyc22S8bs8yVFIveOm40QUlCNmLxK2O0kY3axJvPUE77oxltjmT6V0YXeqz3OBhaV5yNZi_H59uAjs0Bpbb2kR57PWPya3t_lFo5MzleAwGxVPHYEGHJhU_nS5ELBPYHkqqHW-PgEKEKArbHZbG_TRmzeKnaE8veZWGhVFwupWJGylcH3fpITgbKMkxF7Lf_cEng7sppHfVYQ5-s-bOmq2Vlgt7Lgfgdc4_keCMkPm5ZQp-SEm1HPY4HsZjLy5lAULZ1RmBiuKM3xs22M2vD9TXnMTZGdSYGo-DuoWofwfKu_POktusJV3NHV6gaFs05_Nm9wDgKmBxn3XgsNJyGQYeqoPN3_EO4zzUum5jfsZgwGSxue62xZHvGyZ-oDOTGTnzVoDRMzFxOHeiNOjCRhQUoBy4YjXUfD3PC8xheOQnBJCCAK7smeDRb_fC2CJKJ2si5WB9by7-HoUHfhD_lh--HVpu5nLDo_ucbNZB2f09Jw5IthVE6Mwhwyp-GMeWs4yBIs0j9eHFD5d0YHfd41uBqqGt0NZZeHiSo-nLQSkplYSywA-qPZDKCIDIUqyHIHTYy37HbH7AIMXRMTlJPtm3-yUFLvg8itpLd-Wg=w1462-h974-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5.6 1/400 400mm ISO6400',
    date: 'Dec 25, 2018 Tue, 10:25 AM',
    description: 'Coppery titi monkey in Chino, Peru',
    src:
      'https://lh3.googleusercontent.com/ys93V4KpsPD2-3PrsvRcuWGUOLpcws9YWJgACyAMhfgzWHTPnYU6yQ7et2W96ZD32jRF3gkB6erZfE64sxmyvIq8RgMkBCax5jJUef4qO2qe1KDyAwuu0b0SRkjIphF-WVnJtpOk7U_plL2kN974gLC2zXj7Qq6X18vr2uT1hNwtXLbiPcyZHxc0hv7s4KbRsQnPwG3m4C4TDYD-nhBK5SLFxAoYoZl2cBmPltrZKwY5dc7xreT9fLbTCk5JwlLaujgc_mi7LCIfI-hMypLOXWqPdXyICiIGQRPlPELX9J12f0_bgLxVSShKgbLKCpaZ2YxcU1dm099K4eqI_pTciJB-CWZ3d1OonXZ2VHvJPUCyAE27rPr70cOM6O0Jbldls7SUKylQUWCK2y8Wj4SbF-if8K0IkVTor4KOiaXkzF0xL0Mt45irkXaTr1106BBQMLGeiyGSTrayqclK_K138grUp4cN2SHat0AZFt08VN_nfwdzRQcD-Jo8osVsX5fwpCbXaU5iVAj1ERWZnjE885hpLJCoh4W29vGgGGeZitw5mDvDzXlQziVBePp6ucJxtl8aqrSDaEMK3MGy8gw4JzfP0WoJgUgYIcBJHinmL5cN2_6nI0AvR37P6SLhJqeCCmtQiAOvV0kdY2DjYgznblFZRJR7REAazST865HVnNc72YAA_5mPXwXz9DSZMx640rRHQyTpWbbTyuEegF70X09J2g=w650-h974-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5.6 1/400 400mm ISO5000',
    date: 'Dec 25, 2018 Tue, 3:20 PM',
    description: 'Pygmy marmoset in Chino, Peru',
    src:
      'https://lh3.googleusercontent.com/SfVnXTzGuNymk-FhnGk2JKBeLIekO4u51DzydZvnsCmaULHU9UhubmiooR0bJoFe7fN-u5d2G2AYpY8bki58zYGNY83ZZ1xapwhfGWD1zihGJdSu_kp2USsPrfoZ_AlX8sde0B542wsvgmTFMybdEnsR-GFyxYxWqDvDaZ65bHaRt8nVKFCEM82DR3lN43L_eKFh7jrbwRJ8xlpVh9vUuc5drDsv-5-CSZZD7JqRe79YAHec5VlsZrRShtnavpmJP5L_WBET6QE85WYGlocpULP8qpexZzgWQnIrbRxjjVTLfi-IUF-y7ccumVU5ZeDYv2Puhtj8-Z-NqeKjqNBSsjMnOozRQxFrxtehD6camSUUTafqBVza3qx_hyJkec3snXgLyFx3-QHGC3KCpePAtagyNl2P3GnPU5uX0974tC25AU1tcTZsKUJyzS9VCBYNnSaomTO6IzMLNW-aKa5hKFaW1NLZXStbMe1dGOKBPo83Yj86Ckz3yE0u2rOyA0wyDx15w3SIZ9tJdp86PUCTTZkuyfRQ5z_yoeHJJcEH0_UONfmgsp42vFvjq_FpXba-2R81Y6bPncZm9qHBPIsNE7GfQ7pgfeWwHyAY9IuWSyH8WQKqTYh2U9r8Z7h-91YiU8ajJoI4jOUr8UuMuVqPm0WrA31dfakFkQglLPEAi6ysnmC9fpiFkzRmb_4kRUGKQaicAO8_vZzbzonoITkX-NIEyw=w1460-h974-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/22 1/60 90mm ISO400',
    date: 'Dec 25, 2018 Tue, 8:39 PM',
    description: 'Pink-toed tarantula in Chino, Peru',
    src:
      'https://lh3.googleusercontent.com/0v2JW4JB3T1JfTU9RoXunP8sWiudYxUJG9-DgOVQ63LJ2TIW6nQOdPmKRAx9ftdxtJLpH46lrcxy3CU7ZvSxuVMjwzlwiEtdYPN50C38j4SflPo-i66dpkSstFwCcRILt0r-sWw98hkG1onYeP5T1GTfnCfDcueeK6hS56KJkhlsZShMlHDhcsLw9JV3P2ZRK9mOetiz6Y7xELmQ81w1mXMPUHJN2brL21XmZXy8TIk8iHw0USfaLTklVckS-3c-vFJkFCH7SdLYP1ZL1INnMnt27j2hxZozVoPgMZ_nr5mL77GemABmQxdy5kxPMEVvbxxDRP_nDsBgoKnxVcMkbFPt9jVC0OUiCunxKjozp9-RexL0aGSiOrQStmYUeLYLbPTMk3vZ3iAs1-gbGW81eMur33rtd30u5yzeXowPv5LCRerMid3pMSu8httrTI1fGr0dkWvQCGRqF1HuiHnbbfFmaZ3MeTpijj6GTK61sL6AOo8S_CTFV-F_Q589ZuZN4ywlG0_O2xn-qbi4xn9zy1fzZEHn-gJ7By2fNTA9qKp_eQ_8_WoiqhYJ5PBLP_9Yx9WpPu4b98843-arphntc0Fhf-sjNieKcJKaalOed0XVFrzn69eQgwYbhJY7Ftp7JwmH7u_GUknVhKeBl-CJ1zRXznq6Fyt31hq2n7oLbsE6dlnNXHh68a-TjtV7EEX4VSZHRzJZO1YPTBD-9_WhQmZ2GQ=w650-h974-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/22 1/60 90mm ISO400',
    date: 'Dec 25, 2018 Tue, 8:43 PM',
    description: 'Buff-throated woodcreeper in Chino, Peru',
    src:
      'https://lh3.googleusercontent.com/M9V7mBsJbPyIzoJLT-FRYIOHqnA8_cVcynje9WbqxjmvMkMNC6GUDkScUDP9wSsla2Mbt3uugkUXwop5Ap1XXEvi7FIm02cpGTabReCpVvZV5_uY6BEC1GVWTkrfSIpBM1XLq0TOh1CllsOjc1B3hFva0tHhx0J9k-V9-yLzT5kRZWq9pqSDYDTi6PkMH50A91v7dZ3ksanQEfeZ3BA4FJzIPD3yvFPpEPdPZPsuRo1sHpxmMvyiJ34oLFtDnBT13xmt3ToDpjZkqwsaDogx7nOjI22wcikekATwBoNegVYw2kaPHpwveFm4M4hbPbkrVvZmwanxxPP_HULa6G6YA58V5uDCekRsWmcYqSY89C_Rpc6h_Au1zCa3yL_FO6rTkAdqB4psggtXIUC1sXi09PmUF0o5OMMmjGpQooPWTrKACKbx3NmY7jGR55QeMbmwGPK0pNqZfBOfiJLHFMXeZcgov4CD6dd28M-clo1UB9__ywI_hfc2tcukkhdvGY-adk6Q-anP662H9u-KfxTqg0lXq2P1gwQ-mLZQyT6AP2ytdiExRl3C5sECZJjFEocSRhKypKyRVUzxo_wW1I1JixArpzOkfCmskrjyIGq9MLlYAYH357LzehXPvron-Sd1hFhIHhX9SYNEp4x5kReJpUh9fuQki2AP_xyr3O5yRe_Bz7OPLTA1ZsAj1lySZ18sSpZepeFOhKdGcd_EimUYR8JyGg=w1462-h974-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/5 1/250 152mm ISO200',
    date: 'Jan 2, 2019 Wed, 2:54 PM',
    description: 'Black-throated mango hummingbird in Misiónes, Argentina',
    src:
      'https://lh3.googleusercontent.com/Q3yc0m3wbV_RMd_-XqkBmkNK5eGpUZHLAWeKnspKfSYEzafGEbW5GV0AGOIkvTyVZQk0-pnn53l_4H3ptum6D10Eu0qEi_ntvK44Lgav4s82u9BmyfD245eo_oERufxjelTfZxdALJ1rz4x77Gt4kf3TLudodgigRIs3-dfBA5pg4t--tiIURa1m8C35S6FPUCxbxPJSL6VArkUDAAdAL2U6knaBs67r8nn2nAVzqbsNZflvx5LIIZPhkKbqtOY8zWN99-V7AStrKv_iQ932MIa3RJdyZ52kDffjr97BLALks09kAh6TW2mUn8WENPDiWFsEJUEyJxJ2lYSYsdE5MyrcY6faOyKmwQ_0ezaV2D93fRYNclxbc6z0IlZCWShUA2I8M_qintHz4ec4F_p-atf01oQvZkYi6EzrNuKnYD0u_WaBP_ZKK-LUEKohEIi0DvPVi1r3a8xDF56U9irsDDylrp8CSFYmkaL52SyYOqfwrwatBwJz5KQZvhOxXWt7hhiOAkVrvD2z3OaPFWtxbO9cC9McXTH9NnKlSQFk5DbqWoKPU2Sqff8gQ02LuIQu-DJtnMCSgO71O90UR53HC809EJ3HdBu6_YaytRSzECVYQ7U7e0oDVkka6bYygWSdX7JuWSADgVz1m34hpayo5aGmQKVxwUtD=w2912-h1942-no',
  },
  {
    cameraMetadata: 'SONY ILCE-7RM3 ƒ/6.3 1/400 400mm ISO640',
    date: 'Jan 2, 2019 Wed, 2:30 PM',
    description: 'Swallow-tailed hummingbird in Iguazu Falls',
    src:
      'https://lh3.googleusercontent.com/YUlPiRSyMsQWu9Yw-QpODI0OX9jfOlZSwogM5ZtCyPK4SP3cSK5DCjz_SViBUZ4ubAaPzOf4rvKfW9zBjB72gsfg00-OC_2bFKyZH-zOE6o_mRShb2VvDgx94NG84jzBfh9tVxh4pvzk0R1EN0M1X611SmUMvjJRJ_8B43BrubM5o4dhM-syTO-TSBOWJH5YedRVuzajodqAZ-HALk1vDgDOT9Rx__7vdCdtSC2dFRYPBuOyZw60qL2P9fHdFr29qcrN5J5SqRiXDoM5N5kTrXXbtyrYo_-BQdNxlEhLZBPJ476ucwk41R2rxpTF0p8pjmPaSgJmZE5nTU86s7VPwsFJzHu9pvyUHOzkwB2jsYKBxkHiiYDuz8xNzHWhAYre0eQ7iuw2Y4_UJWzbiV512CY44_A0X-RGKFuoXAhq1ElHE3B5Wq0T1mwFPjxup_Rp1Yk_hGyWOOI2pkIfEQCjtX1qV_UstZKHgXguejGMWl3YeLCDcCv9-9BTRGp74kLguzqbkHbYEst07YlFL_g3EZFTR2dnrGHJsh8E0eq3ii8UhBqJWFmT-PDya7DLXMMMmNSoVieS9FewYyWcZDNscSKefq7FnOa58CC5DjDmKw3a4nLO86JcF1spsq5LbObmEEQd0EKq0zR1tmxXt7Euz5jn-OYltRyAkoGkBB4pFlkDHkS6MyQs3gWLi4q5FQFiuuSM0XESqbehoP39elQG0GGLxQ=w650-h972-no',
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
  return renderImages(
    ([] as Image[]).concat(
      foodImages,
      landscapeImages,
      macroImages,
      sportsImages,
      streetImages,
      wildlifeImages
    )
  )
}
const Food = () => {
  return renderImages(foodImages)
}
const Landscape = () => {
  return renderImages(landscapeImages)
}
const Macro = () => {
  return renderImages(macroImages)
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
