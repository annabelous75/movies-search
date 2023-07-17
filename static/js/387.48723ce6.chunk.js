"use strict";(self.webpackChunkmovies_search=self.webpackChunkmovies_search||[]).push([[387],{3387:function(n,t,r){r.r(t),r.d(t,{default:function(){return w}});var e,a,o,i,p,c,u,s=r(9439),A=r(4390),d=r(2791),l=r(7689),f=r(168),x=r(6444),m=x.ZP.div(e||(e=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  background-color: #3f51b542;\n  margin: 20px 30px 30px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n"]))),g=x.ZP.ul(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  padding: 0;\n  transition-duration: 300ms;\n"]))),h=x.ZP.li(o||(o=(0,f.Z)(["\n  background: rgb(255, 255, 255);\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  width: 100%;\n  max-width: 200px;\n  margin: 10px;\n  border-radius: 5px;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  transition-duration: 300ms;\n"]))),v=x.ZP.img(i||(i=(0,f.Z)(["\n  padding: 0px;\n  margin: 0px;\n  height: 260px;\n  width: 100%;\n  display: block;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n"]))),Q=x.ZP.div(p||(p=(0,f.Z)(["\n  padding: 5px;\n  margin: 0px;\n  font-size: 10px;\n  color: #3f51b5;\n"]))),y=x.ZP.h3(c||(c=(0,f.Z)(["\n  margin: 0px;\n"]))),k=x.ZP.p(u||(u=(0,f.Z)(["\n  margin: 0px;\n"]))),b=r(184),w=function(){var n=(0,l.UO)("movieId").movieId,t=(0,d.useState)([]),r=(0,s.Z)(t,2),e=r[0],a=r[1];return(0,d.useEffect)((function(){(0,A.xc)(n).then(a)}),[n]),(0,b.jsx)(m,{children:e.length>0&&(0,b.jsx)(g,{children:e.map((function(n){var t=n.id,r=n.name,e=n.character,a=n.photo;return(0,b.jsxs)(h,{children:[(0,b.jsx)(v,{src:a,alt:r}),(0,b.jsxs)(Q,{children:[(0,b.jsx)(y,{children:r}),(0,b.jsxs)(k,{children:["Character: ",e]})]})]},t)}))})})}},4390:function(n,t,r){r.d(t,{Hq:function(){return A},Hx:function(){return f},Tg:function(){return s},Y5:function(){return d},xc:function(){return l}});var e=r(5861),a=r(7757),o=r.n(a),i=r(4569),p=r.n(i),c=r(1660);p().defaults.baseURL="https://api.themoviedb.org/3",p().defaults.params={api_key:"384dbb7f4c4e6ca826a11d6b421d7ef1",include_adult:!1};var u="https://image.tmdb.org/t/p/w500",s=function(){var n=(0,e.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",p().get("/trending/all/day?").then((function(n){return n.data.results.map((function(n){var t=n.id,r=n.title,e=n.poster_path;return{id:t,title:r,poster:u+e}}))})).catch((function(n){console.log(n.message)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),A=function(){var n=(0,e.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",p().get("/search/movie?query=".concat(t)).then((function(n){return n.data.results.map((function(n){var t=n.id,r=n.title,e=n.poster_path;return{id:t,title:r,poster:u+e}}))})).catch((function(n){console.log(n.message)})));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(n){return p().get("/movie/".concat(n,"?")).then((function(n){var t=n.data,r=t.id,e=t.poster_path,a=t.title,o=t.release_date,i=t.vote_average,p=t.overview,c=t.genres;return{id:r,poster:u+e,title:a,releaseYear:new Date(o).getFullYear(),userScore:Math.round(10*i),overview:p,genres:c}})).catch((function(n){console.log(n.message)}))},l=function(n){return p().get("/movie/".concat(n,"/credits?")).then((function(n){return n.data.cast.map((function(n){var t=n.id,r=n.name,e=n.character,a=n.profilepath;return{id:t,name:r,character:e,photo:a?u+a:c}}))})).catch((function(n){console.log(n.message)}))},f=function(n){return p().get("/movie/".concat(n,"/reviews?")).then((function(n){return n.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}}))})).catch((function(n){console.log(n.message)}))}},1660:function(n){n.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw0PDxANDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8/ODMtNygtOjcBCgoKDg0OGg8QFysdFRkrKy0rLSstLS0rLS0rKy0tLS0tLS0tLS03LS0rLTc3Nzc3NzctLS0tLS0tNy0tKystK//AABEIAKgBKwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBAUHBgj/xAAmEAEBAQEBAQABBAIBBQAAAAAAAQIDERIEExQhMUFRBRUiMnGB/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwQBAgUABv/EAB4RAAMBAQEBAQEBAQAAAAAAAAABAgMRBCESMSIT/9oADAMBAAIRAxEAPwD6nIg5G0Zov/S5U9VVDIX0gZKOUmUUodx0RueGjOjc6ZJozOyOuRWb4avpcpE0OaIXHB3LUb6Gh9T0u0P56AbL1DdA1EpjU10zbhGo1bhG8iJhDNsnbRqE7HmilIzbhW2jcJ0NLAUhFBaZsnVFQCkBulao90q0VAWT0vdXaXqroGyWlborSdVKKk9BarWi7pYqXdA1pWqC1xxNUq1etAqeFWyWqulWq9dwjpfoUqlkivT1jJkKzTPSyfB+WSwK7Q2mIolrpfq/S/U9H/otpAyaHNEfS5sK8+iFzw1TY87ZM7Mzpn65ERfDXNL9IzoyVn3A/lqEqrVQGaOegrROstGoXYsmNzRl6ZI3GzeSN5FllmjHqEbjXuM+4PLBVJm2z7aekZ9mJYtaE6K0Zql6GQu0BorVHordFQKgNUrWhbpOlkUZVpdorQVJANoLRaL1U8Ksq0NqUFSkQSor1PUlS1J6ieEHqnopomUUpXg2mN9V6D1PpaXwuqC9VapVNQyWul/SvQoNzoprmMlHnRHo5ovpl0zr+GvOjM6ZM6Oxpma5F404apUBijZ9waWOpStQYQTTy06J1CN5a9QjcXmhtPpj6ZZ+kbd5Z+mR5ohowdYy9I3dcsvTJmKF7kx7K0fvJOoYli1SK2VTdQrQyYCkJ2To/cJ1F0CaF0NHYCrFQNF02wuxYqxdgKZYGxJVi0F4p3CCJ4uLSjj0yLiSLAaGSSoiRUr0tEWJFBJopQ/FeG4o6l0BIuxPBGuiO2YeadikQeaT1y6Z7/yzXinZrJjTRjTK2yD5a8HeK8SC8Z1zw1sNgLCt5aPAayGmaed9MeskdMtusk7wLLGUc7rhj64dTrhj64MxRSpOb0yRqN/TDL0wbmhW5Mm4VvLTvJVyPLFqRm1kqxp1krWRkApGfUBYfrIbldFGZ9QFjRcl6wkoxFgfD7lXysUEXKvk65V8pIFzKfJnyniDj0iLqIHwaK8V4KRfijRRlRcX4uRCI6RLFyLsHigk0BYrwzxVyamukUugeLyLxJHUumdvkFk/FJzDMkdshFtyzTimwjnT8Vj7ZcHMdi/FWGyJ8kaXDYw2M2sk7w23BW8ITNPO+mDphl6YdLeGfpzHigxyemGbeHV68mTpzNxQO5OZvBOst/TDL0kNQxS5Muslay0a3Cum4YTFakRcg+Q9O1B+4FQFoOwFkJ69bQZ3YsgbHXCvhf608DrukoyXCfAJ2VvunhBepIX+pCt7tL9WUlf0epeL8F4nyCNdB8X4L5T5QQDIKL8FIq0UYPi5Frcjk+FfKWD8X8jxQVPorxcg/lLDKfSlz0GQUSQUitT0zN8w8NGGfJ2KzfRiJqnLNGTJCs6HOkY+ufGaOGwXyDWDcblS6hRrhtYa9Mm+ZG+bZ06Rl6dFpo0s66ZOmGTrzae2mLt0pmLCuenO/M/y5vWul+R/LB1yczoXuDHsnTR1jPumpoUuROytGbpOqPLFqkGqVaG0RMA0F6q6BapYGwrQ2q9V6smDaJQrtB6npH8PYv29iTk636UDeBT9DnDn/t1X8eupnkP9NH7O/JxbxV+m7N4RWvxYn9kODk/pp+m6v7RV/FQ6RRwzmTAvhvv4wbxSrOlMw/KrlsvErefDEWFX0z/K/kPftMs37kyk2A1jpskX+pIw7/KZtdqreXUY/on8nT6fkBnZzv1TMdWV6MBfPXjOljqP9Rix0NmmLrHDZ82w27BpPUsLNm759emfrGLth0Nxm6ZXizSl9OV2wx9Mur15sXTB3Ozqg5vTDH1y6fXLF2ydiuit5mDZOmjpGfRmaEtIF0NFoNHlitSDVWroauBaJ6G1Kr1IMq0Hq7QWpRDR+g5lfyKQRMcTAkX4KRKghlWKuvAdevjl9Py/5qynpH64dP8AcSf3/BW/z8yyOR36+/3WPt08/wArqCjo7/f82f8Apl/6lmOD0/I9/wAlXqn/AJoC7Po9f8pj/wCsP5H5/wBORei5paVwmdDT06+l62X9KujmdBu9Cuw3QLQ+mV9EvRj0Z9jzsj1edFtsuow9c3LN3Po1c9ObjbZx2wvTgG8+3GbcQyQnGzPpj6Rw3/NuTWWbplo9L2B3hv4adMPbLF1y6fTLH2wPGg8vpye2WHtl1u/Nh7YPZ6FLg5fWMvSOh1wxdcnYoS0gzaBTNQrRmaELkoNQOhUxakVaG1A1foJoG0N0mlepK8P0Z7Azc/3Hz35X/J/939/wrj+dLf8Ay89A/AX9H0n0R27ee/y5P77Un9/1/hzPyP8Ak9X2OUEOjq/l/mX+Y5W+9lYd/l0vXb0RQUdGvt+V6zb6+k60G6ESK9GXQfoHo45oq0WKUH0v6U4D/gz1Lov7V9LTXA0WHaH0PqrTmdhWv0g/pPSrU9G50zvTh0dnbVy6OfNGY6kPRj0xqlwzsc+h+dOVy7NXPq8/6ceD/m34bbpLSc7F9MjSeM9J5dybjN0jRaVuBzXDdxvpz+2WHth1emWPtg5noNc6jk9sMHbDrdssPbDQzsX0g5fTLPtu65ZOkORRna5iKCmaLpmaEbkEFHQURMA0BosywHiwNo9G12tTn0v+yPtPsTgLpvn5F/2XrozfqKu0cObG70GaK+1euOQ76VaV6v1BIyaX9kyrlcSO+k+ivVWoZVob9p9E+r9UB/wd9J6VKZBYvgxFkqrV+KsOxfQlSqRXq5VeJFqnqMf1ecbjTVy6MRvPTJ9OBl/YZ1OezpWDltr51570Y8NfyegdFWLkWzLXD0vl36Z+mWXth0NRn64TFm3lfTkd8MHfDs9ubB3wfy0DUuo4/XDH0y6nbDF1y0M7EdYOfvJWmjrGbcNxRm6QBQLsCYlidIrRdo9FURAWj71PEQYAF4niIghleJIiKk9LTxSIJIJSOOL8TxEcSX4rxEQDpFwcqIhFZf0JKpB82NwylqQ7L+FNZTQS5UQLWU0YXphJjue2vj0RGH6s5F8qafw140YpHn95SPQeTSi/AbyiEn8Z6XzWzL15sPfmiGMmakv4c/vzYO3NEaWTYPRGHrzZOmEQ/DM7WUI1kuxENSZ1oCwPiIMhdo//2Q=="}}]);
//# sourceMappingURL=387.48723ce6.chunk.js.map