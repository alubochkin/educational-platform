module.exports = (link, token) => {
   return `
   <div style="background-color: #fff; width: 600px; margin: 0 auto;">

   <h2 style="background-color: #3f51b5; padding: 30px ; color: #fff; width: 100%; text-align: center;">
     Привет это Буткемп
     <br />
     <small style="font-size:13px">Это приглашение в учебный сервис наше школы</small>
   </h2>
 
   <div style="color: #333; height: 500px">
     <p>Регистрируся по ссылке ниже</p>
     <a href=${link}/${token} style="padding: 10px 15px; border: solid 1px #3f51b5">Регистрация<a>
   </div>
 
   <div style="background-color: #333; color: #fff;">
     Footeer
   </div>
 
 </div>
   `

}
