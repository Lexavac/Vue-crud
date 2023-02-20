<template>
  <div>
    <main class='container'>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>4</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <span class='particle'>0</span>
        <article class='content'>
          <p>Damnit stranger,</p>
          <p>You got lost in the <strong>404</strong> galaxy.</p>
          <p>
            <button>Go back to earth.</button>
          </p>
        </article>
      </main>
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
body {
    margin: 0;
    font-size: 20px;
    overflow: hidden;
  }
  
  * {
    box-sizing: border-box;
  }
  
  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: white;
    color: black;
    font-family: arial, sans-serif;
    overflow: hidden;
  }
  
  .content {
    position: relative;
    width: 600px;
    max-width: 100%;
    margin: 20px;
    background: white;
    padding: 60px 40px;
    text-align: center;
    box-shadow: -10px 10px 67px -12px rgba(0, 0, 0, 0.2);
    opacity: 0;
    animation: apparition 0.8s 1.2s cubic-bezier(0.39, 0.575, 0.28, 0.995) forwards;
  }
  .content p {
    font-size: 1.3rem;
    margin-top: 0;
    margin-bottom: 0.6rem;
    letter-spacing: 0.1rem;
    color: #595959;
  }
  .content p:last-child {
    margin-bottom: 0;
  }
  .content button {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    border: 3px solid #595959;
    background: transparent;
    font-size: 1rem;
    color: #595959;
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
  }
  
  .particle {
    position: absolute;
    display: block;
    pointer-events: none;
  }
  .particle:nth-child(1) {
    top: 41.226993865%;
    left: 38.4236453202%;
    font-size: 15px;
    filter: blur(0.02px);
    animation: 21s floatReverse infinite;
  }
  .particle:nth-child(2) {
    top: 30.5418719212%;
    left: 71.1462450593%;
    font-size: 12px;
    filter: blur(0.04px);
    animation: 27s float infinite;
  }
  .particle:nth-child(3) {
    top: 51.2696493349%;
    left: 22.3953261928%;
    font-size: 27px;
    filter: blur(0.06px);
    animation: 34s float infinite;
  }
  .particle:nth-child(4) {
    top: 5.8823529412%;
    left: 61.0236220472%;
    font-size: 16px;
    filter: blur(0.08px);
    animation: 28s floatReverse infinite;
  }
  .particle:nth-child(5) {
    top: 15.5717761557%;
    left: 32.28962818%;
    font-size: 22px;
    filter: blur(0.1px);
    animation: 21s floatReverse infinite;
  }
  .particle:nth-child(6) {
    top: 29.1616038882%;
    left: 35.1906158358%;
    font-size: 23px;
    filter: blur(0.12px);
    animation: 31s float infinite;
  }
  .particle:nth-child(7) {
    top: 53.4629404617%;
    left: 69.403714565%;
    font-size: 23px;
    filter: blur(0.14px);
    animation: 24s float infinite;
  }
  .particle:nth-child(8) {
    top: 88.1355932203%;
    left: 10.7212475634%;
    font-size: 26px;
    filter: blur(0.16px);
    animation: 38s floatReverse2 infinite;
  }
  .particle:nth-child(9) {
    top: 93.5960591133%;
    left: 69.1699604743%;
    font-size: 12px;
    filter: blur(0.18px);
    animation: 34s float2 infinite;
  }
  .particle:nth-child(10) {
    top: 7.8624078624%;
    left: 74.9506903353%;
    font-size: 14px;
    filter: blur(0.2px);
    animation: 21s float2 infinite;
  }
  .particle:nth-child(11) {
    top: 62.4390243902%;
    left: 26.4705882353%;
    font-size: 20px;
    filter: blur(0.22px);
    animation: 34s float2 infinite;
  }
  .particle:nth-child(12) {
    top: 32.15590743%;
    left: 39.1772771792%;
    font-size: 21px;
    filter: blur(0.24px);
    animation: 21s float infinite;
  }
  .particle:nth-child(13) {
    top: 96.3144963145%;
    left: 90.7297830375%;
    font-size: 14px;
    filter: blur(0.26px);
    animation: 32s floatReverse infinite;
  }
  .particle:nth-child(14) {
    top: 65.8476658477%;
    left: 95.6607495069%;
    font-size: 14px;
    filter: blur(0.28px);
    animation: 37s float infinite;
  }
  .particle:nth-child(15) {
    top: 65.6862745098%;
    left: 46.2598425197%;
    font-size: 16px;
    filter: blur(0.3px);
    animation: 29s floatReverse infinite;
  }
  .particle:nth-child(16) {
    top: 9.8159509202%;
    left: 46.3054187192%;
    font-size: 15px;
    filter: blur(0.32px);
    animation: 35s float infinite;
  }
  .particle:nth-child(17) {
    top: 4.8250904704%;
    left: 71.9144800777%;
    font-size: 29px;
    filter: blur(0.34px);
    animation: 25s float2 infinite;
  }
  .particle:nth-child(18) {
    top: 97.7995110024%;
    left: 18.6640471513%;
    font-size: 18px;
    filter: blur(0.36px);
    animation: 23s float2 infinite;
  }
  .particle:nth-child(19) {
    top: 31.884057971%;
    left: 36.9649805447%;
    font-size: 28px;
    filter: blur(0.38px);
    animation: 34s floatReverse2 infinite;
  }
  .particle:nth-child(20) {
    top: 7.7481840194%;
    left: 32.1637426901%;
    font-size: 26px;
    filter: blur(0.4px);
    animation: 22s float2 infinite;
  }
  .particle:nth-child(21) {
    top: 10.6408706167%;
    left: 33.106134372%;
    font-size: 27px;
    filter: blur(0.42px);
    animation: 27s floatReverse infinite;
  }
  .particle:nth-child(22) {
    top: 23.1325301205%;
    left: 37.8640776699%;
    font-size: 30px;
    filter: blur(0.44px);
    animation: 34s floatReverse2 infinite;
  }
  .particle:nth-child(23) {
    top: 1.9300361882%;
    left: 80.6608357629%;
    font-size: 29px;
    filter: blur(0.46px);
    animation: 35s float2 infinite;
  }
  .particle:nth-child(24) {
    top: 57.5609756098%;
    left: 93.137254902%;
    font-size: 20px;
    filter: blur(0.48px);
    animation: 38s floatReverse infinite;
  }
  .particle:nth-child(25) {
    top: 10.7055961071%;
    left: 91.9765166341%;
    font-size: 22px;
    filter: blur(0.5px);
    animation: 38s float infinite;
  }
  .particle:nth-child(26) {
    top: 89.3251533742%;
    left: 91.6256157635%;
    font-size: 15px;
    filter: blur(0.52px);
    animation: 30s floatReverse2 infinite;
  }
  .particle:nth-child(27) {
    top: 8.7167070218%;
    left: 7.7972709552%;
    font-size: 26px;
    filter: blur(0.54px);
    animation: 30s floatReverse2 infinite;
  }
  .particle:nth-child(28) {
    top: 40.7766990291%;
    left: 32.2265625%;
    font-size: 24px;
    filter: blur(0.56px);
    animation: 27s floatReverse infinite;
  }
  .particle:nth-child(29) {
    top: 31.8455971049%;
    left: 19.436345967%;
    font-size: 29px;
    filter: blur(0.58px);
    animation: 26s float2 infinite;
  }
  .particle:nth-child(30) {
    top: 12.6366950182%;
    left: 13.6852394917%;
    font-size: 23px;
    filter: blur(0.6px);
    animation: 25s floatReverse infinite;
  }
  .particle:nth-child(31) {
    top: 17.6470588235%;
    left: 10.8267716535%;
    font-size: 16px;
    filter: blur(0.62px);
    animation: 36s float infinite;
  }
  .particle:nth-child(32) {
    top: 73.7100737101%;
    left: 71.9921104536%;
    font-size: 14px;
    filter: blur(0.64px);
    animation: 29s float infinite;
  }
  .particle:nth-child(33) {
    top: 19.6078431373%;
    left: 94.4881889764%;
    font-size: 16px;
    filter: blur(0.66px);
    animation: 38s floatReverse infinite;
  }
  .particle:nth-child(34) {
    top: 58.7515299878%;
    left: 82.5958702065%;
    font-size: 17px;
    filter: blur(0.68px);
    animation: 32s float infinite;
  }
  .particle:nth-child(35) {
    top: 22.4938875306%;
    left: 6.8762278978%;
    font-size: 18px;
    filter: blur(0.7px);
    animation: 37s floatReverse infinite;
  }
  .particle:nth-child(36) {
    top: 18.7192118227%;
    left: 74.1106719368%;
    font-size: 12px;
    filter: blur(0.72px);
    animation: 31s float infinite;
  }
  .particle:nth-child(37) {
    top: 61.1650485437%;
    left: 46.875%;
    font-size: 24px;
    filter: blur(0.74px);
    animation: 35s floatReverse infinite;
  }
  .particle:nth-child(38) {
    top: 0.9696969697%;
    left: 9.756097561%;
    font-size: 25px;
    filter: blur(0.76px);
    animation: 39s floatReverse infinite;
  }
  .particle:nth-child(39) {
    top: 89.1064871481%;
    left: 22.6155358899%;
    font-size: 17px;
    filter: blur(0.78px);
    animation: 37s float infinite;
  }
  .particle:nth-child(40) {
    top: 45.3558504222%;
    left: 55.3935860058%;
    font-size: 29px;
    filter: blur(0.8px);
    animation: 34s floatReverse infinite;
  }
  .particle:nth-child(41) {
    top: 3.9072039072%;
    left: 31.4033366045%;
    font-size: 19px;
    filter: blur(0.82px);
    animation: 31s float2 infinite;
  }
  .particle:nth-child(42) {
    top: 53.2019704433%;
    left: 64.2292490119%;
    font-size: 12px;
    filter: blur(0.84px);
    animation: 39s float infinite;
  }
  .particle:nth-child(43) {
    top: 23.4432234432%;
    left: 76.5456329735%;
    font-size: 19px;
    filter: blur(0.86px);
    animation: 21s float2 infinite;
  }
  .particle:nth-child(44) {
    top: 63.1067961165%;
    left: 31.25%;
    font-size: 24px;
    filter: blur(0.88px);
    animation: 27s float infinite;
  }
  .particle:nth-child(45) {
    top: 19.3939393939%;
    left: 58.5365853659%;
    font-size: 25px;
    filter: blur(0.9px);
    animation: 31s floatReverse2 infinite;
  }
  .particle:nth-child(46) {
    top: 94.4578313253%;
    left: 64.0776699029%;
    font-size: 30px;
    filter: blur(0.92px);
    animation: 40s float2 infinite;
  }
  .particle:nth-child(47) {
    top: 30.5418719212%;
    left: 1.976284585%;
    font-size: 12px;
    filter: blur(0.94px);
    animation: 26s floatReverse2 infinite;
  }
  .particle:nth-child(48) {
    top: 13.7761377614%;
    left: 17.7690029615%;
    font-size: 13px;
    filter: blur(0.96px);
    animation: 39s floatReverse infinite;
  }
  .particle:nth-child(49) {
    top: 32.1951219512%;
    left: 11.7647058824%;
    font-size: 20px;
    filter: blur(0.98px);
    animation: 21s float infinite;
  }
  .particle:nth-child(50) {
    top: 79.9013563502%;
    left: 60.3363006924%;
    font-size: 11px;
    filter: blur(1px);
    animation: 24s floatReverse2 infinite;
  }
  .particle:nth-child(51) {
    top: 61.5384615385%;
    left: 49.0677134446%;
    font-size: 19px;
    filter: blur(1.02px);
    animation: 33s float infinite;
  }
  .particle:nth-child(52) {
    top: 65.7004830918%;
    left: 90.46692607%;
    font-size: 28px;
    filter: blur(1.04px);
    animation: 26s float2 infinite;
  }
  .particle:nth-child(53) {
    top: 94.8655256724%;
    left: 55.0098231827%;
    font-size: 18px;
    filter: blur(1.06px);
    animation: 22s float2 infinite;
  }
  .particle:nth-child(54) {
    top: 62.9766297663%;
    left: 2.9615004936%;
    font-size: 13px;
    filter: blur(1.08px);
    animation: 24s floatReverse2 infinite;
  }
  .particle:nth-child(55) {
    top: 25.1511487304%;
    left: 31.158714703%;
    font-size: 27px;
    filter: blur(1.1px);
    animation: 33s float2 infinite;
  }
  .particle:nth-child(56) {
    top: 39.312039312%;
    left: 68.0473372781%;
    font-size: 14px;
    filter: blur(1.12px);
    animation: 22s floatReverse infinite;
  }
  .particle:nth-child(57) {
    top: 63.4146341463%;
    left: 47.0588235294%;
    font-size: 20px;
    filter: blur(1.14px);
    animation: 22s float infinite;
  }
  .particle:nth-child(58) {
    top: 67.3992673993%;
    left: 57.8999018646%;
    font-size: 19px;
    filter: blur(1.16px);
    animation: 31s float infinite;
  }
  .particle:nth-child(59) {
    top: 57.2121212121%;
    left: 29.2682926829%;
    font-size: 25px;
    filter: blur(1.18px);
    animation: 31s floatReverse2 infinite;
  }
  .particle:nth-child(60) {
    top: 29.304029304%;
    left: 71.638861629%;
    font-size: 19px;
    filter: blur(1.2px);
    animation: 33s floatReverse2 infinite;
  }
  .particle:nth-child(61) {
    top: 54.7677261614%;
    left: 58.9390962672%;
    font-size: 18px;
    filter: blur(1.22px);
    animation: 21s floatReverse2 infinite;
  }
  .particle:nth-child(62) {
    top: 13.7086903305%;
    left: 18.6823992134%;
    font-size: 17px;
    filter: blur(1.24px);
    animation: 24s floatReverse infinite;
  }
  .particle:nth-child(63) {
    top: 75.6363636364%;
    left: 96.5853658537%;
    font-size: 25px;
    filter: blur(1.26px);
    animation: 27s float infinite;
  }
  .particle:nth-child(64) {
    top: 40.2948402948%;
    left: 31.5581854043%;
    font-size: 14px;
    filter: blur(1.28px);
    animation: 31s floatReverse infinite;
  }
  .particle:nth-child(65) {
    top: 52.5547445255%;
    left: 43.0528375734%;
    font-size: 22px;
    filter: blur(1.3px);
    animation: 31s float2 infinite;
  }
  .particle:nth-child(66) {
    top: 40.9257003654%;
    left: 29.3829578844%;
    font-size: 21px;
    filter: blur(1.32px);
    animation: 23s float2 infinite;
  }
  .particle:nth-child(67) {
    top: 86.8292682927%;
    left: 72.5490196078%;
    font-size: 20px;
    filter: blur(1.34px);
    animation: 30s floatReverse2 infinite;
  }
  .particle:nth-child(68) {
    top: 41.4457831325%;
    left: 50.4854368932%;
    font-size: 30px;
    filter: blur(1.36px);
    animation: 33s float2 infinite;
  }
  .particle:nth-child(69) {
    top: 81.8742293465%;
    left: 72.2057368942%;
    font-size: 11px;
    filter: blur(1.38px);
    animation: 26s float2 infinite;
  }
  .particle:nth-child(70) {
    top: 5.8895705521%;
    left: 84.7290640394%;
    font-size: 15px;
    filter: blur(1.4px);
    animation: 31s floatReverse2 infinite;
  }
  .particle:nth-child(71) {
    top: 16.7076167076%;
    left: 0.9861932939%;
    font-size: 14px;
    filter: blur(1.42px);
    animation: 33s float infinite;
  }
  .particle:nth-child(72) {
    top: 41.3793103448%;
    left: 41.5019762846%;
    font-size: 12px;
    filter: blur(1.44px);
    animation: 40s float2 infinite;
  }
  .particle:nth-child(73) {
    top: 87.0415647922%;
    left: 43.2220039293%;
    font-size: 18px;
    filter: blur(1.46px);
    animation: 40s floatReverse infinite;
  }
  .particle:nth-child(74) {
    top: 61.2393681652%;
    left: 42.0332355816%;
    font-size: 23px;
    filter: blur(1.48px);
    animation: 34s float2 infinite;
  }
  .particle:nth-child(75) {
    top: 13.6919315403%;
    left: 28.4872298625%;
    font-size: 18px;
    filter: blur(1.5px);
    animation: 24s float infinite;
  }
  .particle:nth-child(76) {
    top: 53.7240537241%;
    left: 79.4896957802%;
    font-size: 19px;
    filter: blur(1.52px);
    animation: 33s floatReverse infinite;
  }
  .particle:nth-child(77) {
    top: 91.1515151515%;
    left: 36.0975609756%;
    font-size: 25px;
    filter: blur(1.54px);
    animation: 24s float infinite;
  }
  .particle:nth-child(78) {
    top: 16.4449818622%;
    left: 85.6864654333%;
    font-size: 27px;
    filter: blur(1.56px);
    animation: 31s floatReverse infinite;
  }
  .particle:nth-child(79) {
    top: 61.7611580217%;
    left: 94.2662779397%;
    font-size: 29px;
    filter: blur(1.58px);
    animation: 36s float2 infinite;
  }
  .particle:nth-child(80) {
    top: 27.0858524788%;
    left: 21.4216163583%;
    font-size: 27px;
    filter: blur(1.6px);
    animation: 26s floatReverse2 infinite;
  }
  
  @keyframes apparition {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(180px);
    }
  }
  @keyframes floatReverse {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-180px);
    }
  }
  @keyframes float2 {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(28px);
    }
  }
  @keyframes floatReverse2 {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-28px);
    }
  }
</style>