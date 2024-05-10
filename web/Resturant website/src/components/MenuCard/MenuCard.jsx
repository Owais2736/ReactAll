import React from 'react'
import { Card } from 'antd';

import { useState } from 'react';

const handleInputChange = (e) => { 
  const searchItem = e.target.value;
  console.log(searchItem);
}



function MenuCard() {

  const [searchItem, setSearchItem] = useState('')



  return (
    <>




    
   <input style={{width:"100%" , height:"40px" , borderRadius:"7px" , border:"2px solid red"}} type="text" placeholder='Search Product.... '   onChange={handleInputChange}/>

  <center>
    <h1 style={{background: '#ECECEC' ,  color:"red"}}>DESI FOODS</h1></center>

    <div style={{ background: '#ECECEC', padding: '30px' , display:"flex" , flexWrap:"wrap" , gap:"30px" }}>
    <Card style={{ width: 625 }}>
      <div style={{display:"flex" }}>
        <div>
        <h2>Malai Boti</h2> 
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsam soluta? Id velit provident nostrum magnam fugit necessitatibus, 
            dicta quae soluta sit molestiae eum cum veritatis, debitis consequatur at excepturi?</p>
            <br />
<p style={{fontWeight:"bold" , fontSize:"21px"}}>RS:500</p>

        </div>
        <img style={{borderRadius:"10px"}} src="https://media-cdn.tripadvisor.com/media/photo-s/17/a6/e5/72/malai-boti.jpg" width={200} />
      </div>
    </Card>

    <Card style={{ width: 625 }}>
      <div style={{display:"flex" }}>
        <div>
        <h2>Seekh Kabab</h2> 
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsam soluta? Id velit provident nostrum magnam fugit necessitatibus, 
            dicta quae soluta sit molestiae eum cum veritatis, debitis consequatur at excepturi?</p>
            <br />
<p style={{fontWeight:"bold" , fontSize:"21px"}}>RS:700</p>

        </div>
        <img style={{borderRadius:"10px"}} src="https://www.ndtv.com/cooks/images/seekh-kebab-620.jpg" width={200} />
      </div>
    </Card>

    <Card style={{ width: 625 }}>
      <div style={{display:"flex" }}>
        <div>
        <h2>Tikka</h2> 
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsam soluta? Id velit provident nostrum magnam fugit necessitatibus, 
            dicta quae soluta sit molestiae eum cum veritatis, debitis consequatur at excepturi?</p>
            <br />
<p style={{fontWeight:"bold" , fontSize:"21px"}}>RS:400</p>

        </div>
        <img style={{borderRadius:"10px"}} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA9gMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgMEBwIBAP/EADoQAAIBAwMCBQEFCAEEAwEAAAECAwAEEQUSIQYxEyJBUWFxFCMygZEHFUJSobHR8MEzYuHxJUNyRP/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAQIFAAb/xAAyEQACAgEEAQMCBAYDAQEBAAABAgADEQQSITFBEyJRMmEFcYHwFJGhscHxI0LRM1IV/9oADAMBAAIRAxEAPwBFS65HNYhrnpd8tR3PzQiksDJRcj3rtktuhLRLSTVrrwYnCgdz7UWqguYC7UCoZh+boy7VgFmyCO+KudOoOMwA1ufEr3XRl/Gu6OUN8EYqrUASy60nxBFxoOqQZ3wMf/xzXCgHzLHWCU3tZYz97G6D/uWirphBtq5wYkJ/EKKNOIE6sz5YFZtq+ZjwAB3q3oCQdUYWfpK++yibw+cZ2euKqUQHEgahjCOldPCW3xIAOO1UfSnuP0W7hLkPSVvADIeR80q9bDuGNiJ3LUWhWpO5UH60AkjqSGRuZU1TRYYwHKUJ7T1CooPIitdG0ikwSqn5qybyOJLASCCSOaTEbAjPpRWBA5lRiE4YeBxQsy+JbW2qMzsCfeGIzUgyDKOt2JubfIGD70atipzA2gMMRdsdRewlELkgZphqw3uETW3Z7THLSit0gkyDStthHAjiDPMMogUYJFK4hsytexptDd8VZVzBsQJzbyW4RllxyPWr7CDxIDLiKWveEZz4O36VsaK0jgzI1tYPKwXGHjZZIzgj0rU2eoOJlhih5jPpPUaqoimJUjikbdORHa7we4QnuVuEMkT5496QdPdiMcEZmUam2/UJz3O7mtrwJl/MOC0k/lrE9QT0/pyRbaX2NR6gk+mZ0LaY8AGrL7upRwF7h7pOeTS9SV3/AOnJhW+Pmn9PWVMytYwZZtdj4dzaq42nir3U+YlXbmRXGoWMB8OVkB9iaVwTGQrHzA2pa5p0MyxyKcH+ILwKq+nZl3LC8r9UvQabY30CyRbWVvj0oVYYDvmQ5GeoLv8ApjTWciSJDn2GKkXtuxmSKgwyJzpXSVhb3K3Cdx2DHgVL6kg4EGasRkubNHtzGig/NUKlzkSA+3uKrrLYzSJt49K1Ef2YMYpz9Qi/f6/cm5MIjIXHvVGo9QYmfq9SxbEgseolF1tdsY4IpK+kVrNb8OQkAkznXOpotmxMGs30i5m2m1JnmpPPqd4Fth3PNaVIWpMtM/UF7Gwkd+nulGtLDxp3+8Iyc1Tet0gKydwfPqfg3bQopO04oY0pYzn1QTuHNIEmouFQFR7kVddEScGBfXqBmPGndN23g75V3kDkkVp1aGtByJk3fiLueDF7qv7NbMtvHt3eoHpSetrCnaI5ormbkzPNa03xX8aPHvQamwMQt3JyJzY6zJpw8ORahqA/IkLqCvBhEdXRgc96H/CmX/ixK931T40e1FJPpii16bByYN9WCJSjvb67fCgijOiCBFzEwppmjTSSb7nJJoDWY6lx94Xl0FTH92MU1ptUUPMXvpD9Ra1LT5baYjBHzWxuW1ciZvurODJLK7eAbCcgjGKWbT5PMYW8gRWn2LeTeLw2eaIRBgzRhp49QK8php6/eJFLbpH6CmKqGc8wNmoVBKzlFOa1KtOFEyrtTuM48dHZY1HJ9famhgdRQndH3TbrUrLTEjicSEjgn2q7t7eYSnRqz8GV7yVN67zvuO7UkXz1NtKAkW9c1dUnZGXuORXJqNh4nX6VbE5MudEazqjW8ipg2qtheeQKztReFslKNECuWMP3988hj3sVLHHegEljkR6qtFGJ9LNdLEBBO6lefeoc47kehU/Yk2k9VXNtfJb34URtwJM8ZpijUgcTP1f4bxlJZ6suNiC6hXKep9qYo1G98RWoGsczLda1G5M2Y0Ge1aFlmwQHoi1swRY2l9cSmQhgc57UlbaCuTNDToUO0SS60vUvDMngM4HGRzQK3rzG7C2I0dH6QI7I3FxERIOfMKDf7j3JobIhLWtaa3tdiKRngGqJweISxR2YK6a6fvrzUDcXtuyxOchq06lbuYeserPBmj6boi2zBk7U/WueTMiyyMQDizcL+L0pgAZi+eJm+taBqdxfy3Dxq6scAZwaS1Oid33Ax/Ta2tFCmUP3U8IxNA4/LNZzaexf+seGoRvMpXOl2kpw64b5GKp7l7nEhpSbpy0LZFXFhlPTksGgWcbAtj8642EzhWIWtbezhxgLx60NjCAYhBLmBeAVFUkydLuPGAVxVwJUwbrEUF3GTwCBTdNprgLag4idJDsnIB9eDWwliXCZzq9R+0VNbBXUJDj8XNCcYOIRDuXM1i8uooE+awaKtxnobrdggSa48Usf4a1ErCzMewsYMuLlpZfBgQs59AMmiQMN6L0nfXkSzOxiOcgMvJoD3KnBMIiE8w7qV++j2qCQ7scH4rrHynBmrQu07sQfa9S6bHC00jhpGJ70slTCNPqQ3MVb2+Gp6jIYE8RMd/amKKdpMU1WsLKAI09NTfZbHwgo79vavP6rPqkzYoVWqWFkkW9uo4CPMDXUbicSLVCiHry2FvCuRjIpq+raIpTZvMVdeljjjIyAx7UmFOeJpr9OIxLcw3vS4DEFjFg/XFXrtat8zz+or9xEzHTNN1C41hvtUZMAPHlrXe03JkdwWnras89R9js7e0s/NEqH6UmamC8zXrdT1O9JZUkZGUPEeRml/tL2JlciX5b6xXMJAQimRVlYnuKHmCNR0aXUXRLRAWyGBPb86B/8myY1bYhq5jZG0lpYxxukYlxjjtmmW/ETj2rMNdEljcniCNV6xbSfDE9usik7SUPIP0pvS/iG44YQer/C9qbkMs9M9aW2sboXxFODwh74rTS5GbExWRljSGDDzKDn1o8pPDZwOPOlcWM7EqXnT9lcggxjketUIVuGEuGdeQYja/0peW92v7ubEbnBV+dvyKTu0AY5rMcp12BiwRf1jRtW08hv+sp5LIOf0pWzR21jOMxurVVOcdQBLJeIxDOVPsRg0mTjsYjYAPRzO7a4uc+ZziukbYatZWI5epBlCJLPJ5e9EzK4ga6Te+RV67WQ8SrVBhzFLqOB4rkM3Zu1aC3eqMxFqvTjxfMZJsAE4qK6gojVtpaUL+UW1uSe54FWIgc8wz+zvT2kv2uZ0ByMeYfSg2HC5lwuTNW2oqhUUDjnisG6wk8R9FAiB19bpHAWJzuPb5p+rc9ccS0KcTL7bTpb28KqrbAeaKbNqfeXNQNmfEctM6ZX7M6o2w7e4oNV1m/uRbXUwxCmn6UbS0CpLvcZzk1m6glrCZo6UhKgMSHTjqMGtLP4TPED3BoiMqYPmVt98ZtS1KR1+8UgYozXeqYOupahuEQddvxdSMozuU8VRE2mEGoDCHemHkEEdu5Jz6Gq2YzENnqWE+I6w2eyFWChR8CnUQhe5JsAOBJXtFuFKSqCBSF9jg48Sm/HIir1BbT2lzELOTa78AUJQCcx2mwbeZJpXTF9qd9HJqDZVeWIPenEsYcDuKayxFAjndTWukxBUAyBz8Uncp3cmK1JZqOYk9R9STFVEHELHJkb0xRqq2ZCI+iV0dxGv2uppS9xI9wxb7sJyAp96cStdmR3APe3qbPEu6PoFxNMblrl4I4vMJF4INH9UL74rZpgc5EazfazdwAaXqLuYWHiO4GG/pTP8UxX4iSaSq4ZWGuktZvpdRls9RmRmAyjJwD7inqLjYvI4iGr0vokYMdOVOCcGjcGKcieSFZCNw/pXAEdSpM4ktoZcB1BH0qdzCdgQDqnSmn3jkyQRsfQkdqq9VVo96wiX2Vn2mIvVHSn7mjN1C2Y9wzGfSszVaNa13p1NTS6w2HY/cE2zcVniOmSTt5akyJTxl+e1RmTiQalYRXsa7lGVajI5WBdQ3cJlgg3lefmtaKmL13IdR1eKCIFsHlRQ2nAZM0nSLRrFUlEgj2rgL71m36kKMTVo0nqdwtc6xdQxJI8IKkcnNZy1bjmOjTVjPMEXsllrymMPtkU/hPrTnqBOJwp8yPTdFWEvGIlUdsj1odtwHtxLGlc7iZLNHDpMRuWk8MZwVb1qagW68SG2KcmLd7PK5a6tJ9qu3CrzVbPaeRCplxjMl0q81GCZpJJw0JIBBHahWsLBnHUEq+i2Ce41syXNrwVfeOOKTJI6jIGGgOTp6G4ufEmZYoEG449T81cXMF+8DqUBOVnnSohfVZmVw0cbFU/KijO4ZkhdtfEeLycJAdikt7A01ZZhMCJKrZzBwFy0gkDEccqaRO9jzGyUwAZSTdca0BNGSyDCsewNHXTHaCDKhgQeOo6wJ9htj5gTjNU2tplJY5JmU7es8QOsr67F1GljEXll+O1ATD+54+XeqoCvuBdT0m8toomnJnmkGDFjy5NO0tWRtMq4sZd3chttMvLATRMVEzuOEHYetSrgiR6RrtDLzmdz2ep3WlTWMNwixBjvkA5PxVDaqNz4jb8D85Y/ZtPPp8d7ZXa7o4WB3nknNM26kNtxFatNjIEuQW4PW9nOAYgzEhfjBrU0lgIxEPxOrCgzR5rkKx5rQEwysiW6DVcQRElSRjzU4leZ9LLyM1wEhon/tJuQukEH4/vSurH/CY3o/8A7CZzBdisPGJuGdyXGfWoMkTlJAT3qJMm8RccmpzK7Z1fysqHI7Ct1uBM6DekZTHf3F8VDFMjNK2oXGAYxQ4Q5M0PT7hb/Tvtk8ihQcH0xWI+k/5ACZs1ao7SRDMMCOQJHDoyZPxRgVGQsGpce4xO6pgktcPaAh9/BB9KSX6zvmwjA15xD0OoW8FtbLdXcMc+ASu/k0WvG3JiNjLv2+YN1G4uL6/ZRbi4sseV845+hpunU1UZVj3B26V7VUgYxFXVF1K3codMlg8EhwBgjB7Hg1ZytwxJpHpkHMoS6pNdSRxEOsxbDKBgYoQr2g/EJqES5lIPMctJvmt7dkY4EYwuRyaTrpNh4jNrIgyTxBOp6m+q+JbWt0FUrg84OanZ6TbmE5Nly4QyrpjnS3W3kkwwx5h61djvbcJ3pkDE0PT50ktQBOryEcc1FjLtxFmUg9S3pSmON3vpMvu8oHtQatoPMFduPCCTPbrK/jx5Cg9xTFrtjNY4lRYUG0yvcagi3Jg+0fequSjH0pZlawjIkoq45ED6l1C1pcLust4cYWQEYoZr3kk+Ix6GADmRWd1cXqul95cE7dvfHxRWC9CDVyHK44n2pXcel2YgmCyPKdqOOTimgF9PHmCtu9Mhj1B2gzSzwXqxqBDHyR/EaWtqITiDXUpdynMqdJ3H/wAvqLu/hq20KreuKi4bUSGqck8jud3+uiHqy2ki8wQbWKjPetD8OLKSzRb8RUemFEcptXSQqd3cVqfxGZj+jgSzZSs/JP5U7U2YramBDELgL5jge9GZgoyYqqknAkVzPGpBLce9KW66qvsw6aR3MzT9petwzmOyicEnzEfArOfVNdyOpoaegIee4jRSlfWgmO4kxmJHeqGSJ6spHrXASTOjcMPWrYkZhPX3MdkzYGcVr2HiZwinp19LFZyCLILPzj1oROBJXJmu6HDFN0pFFGAWlAzn3pKoCy858Ry3ctAVezGTQNOisrdzM+5mOW3HtQ/bvJHUZzYFC+YuXscU+qPDcTLnDPsC4UD0BY0I6T1Du8RtdZsYI3cq3Yson3ahbKziPeJI8BkX5onoOPYyErKG8Fwy9/Mg0ya+U3Ec/hpCEJt955B9NwHxSjJSlRsGTLW6/a2XOfy/vKGoWr3VvmW8KMT4bumGHcds8/HApmnir1cdxdk/inxnA7Eq2cX2e9upnKzTtGUPiDAX/uAx3oHrbRt28R0fh/t3q0ByalqL29yizNIhk2I5G1l+QPamq1Wp1Zex/WCJ9RGpfo9SHpuymnvZzCzNGF3SMf4fkk1OqYumcSdHStDEBu4V1DVhZqkMtmQyttZm9fkUlXpmckho82oFR9wnmkajf2+qRyqrxQv+EODhq62uvZ3zOD+oeBxNBub1Rp3iSTKsmPQ0GvaAJTYQ3EaNLlgOkRyh87lGa1KhX6XEybg/q4MCahaWJjmlYrI7cBlPI/Olb8KNwMZqDMdpHcBXmn/bdP8ADWUxhOUwM9qz0Ylt3zHrgEXiVpi8MVpJax3F3PE2Gw2xQcdif/dNJUMEvxmBUGw8fEHzxX32VxfLO7OWYMuG2t9c8VIAQgriVNQsUoc/0hXpa/S30tvtcKwStgBl53DHGau9yGzkQKaCyqrCYgfXdJuzEb2F1iZzlQvc0BLUNm3EvltmH7EBdOy3tvezeLAxb/7GkHb6VqEKq4Eznbecxtium25PJNVTMGeY0aK8rwBpO9aVTRC1YZkVnh27tvzRNUvq17c4gtPhHyYrdW69Fo9g2W3Sdhg8k1gvpyxFYj/qAZYTG7u8nu7p7iRsyMc1oioKu0QS2HOZIJjszjmgmvEaWzcOJ8srZ71UgS0txZYVQnEtiSeE5qN07EMdSYFhMPQL3rVsPEQQZg/pXTba50hJn/GXOaixPaDJpbuMfSWpLaXt1p8ztlfNED6/FZlma33DozRT3L9xNEhmN4kexMH+M9sVyV72OP0htwRctF2+gaS5vZp0jigIIVixyTgec/ArUSvap384/l+f7+JlHNtgdT3+8QfptlBd2cUkkFvLGn3e6Vm8SX1B44UHg/4pbcXADeOD+/iOrWgJwOD15/f5ya9tJ1e6NukMcco2s2SWI9Dnv6Y/M0uuoT0zVWAB84lz+HlnDfH9/wDEDDTr63vRKtzbZ2ELERwxJyCO+O3tQjdUtZrYZB8/H5Rj+AvbBD4P95Vn8axn+031kx8QAP8AZ2yrE+vuOaXVlI2qf5zQSkrWATwPiBpNRa2dokgENxv8omAIKEe59aOtW4ZJyIhqU3PuT2t94Ru7y0+weDJdGK7aQCZkGCFA7EVwWxTwOMQlL+sfUdgDLvTkMF5pzzXWx5Gw0YAywA5zz60K2vaSF4IhvWF31cj7SaXqCNla0liQyx+ZJJ1x+WPeuqqUDJk2M3/Q8S79qSbEV0sQXvngHbjgVTVKFICy2kNrFt2MeJ83VUul24sbfwJecKJP811FjheuJOp09OcluTCEgV1hmSSQswLNDEu4DiqOos7MEjmvII6hHTHku4zMImgiVOFlXDZ9/pQCArBV7z+kEb93Yga+4givIw8IZCFVWKh8fA4/PFOn02DVluREy7bg1Z78T681J4AIY4d/hnMhbny+hyKG6Ajrb9o5otQ1m3dznz/v+8H/ALxivLCe5CGFUzmMHAGPXP8AWgNWVs2g5mgLA9JJ8ZgPS9W+2RNFPdOwikzGO5IyeDTrUBLQcTKR/V05IPMPQBLiQjIBI/Wm9oJmeTiELS08SYBRwKKqCCZoXm1i108COJXuJeMRxD8hzUs5DADgThXxlhAlz1pcRTG3mjjkLscIh2vDgZO4EdgOc/Wr2HgeRBpVvGRxM06kv7zVLoXcm8Rg5Cfy11ZGcCDes4zK1nH4qhv1pgJBhoSW0yMelQ9WYRWwcylMvgSFXH0pFkIOI6jgyaG5VcUFkMLkQjFco696CVIkwl1IGbTJNo9K2bepnpOOgLZ7vSyvhSGOCXMsi9lX1phUFgXMV9X093zObS4tZOo45grsbebAuFcASAscDHrx/ak/SyxAMfS7aFJHM0jSdZtJbh47nw4plc4Rn4Knscj1+DS5YVqUY4Pc0XrW73qMiX9aS1fSWutSfbGvm8ONvxL7H3HxUBmI3E/kIFiVyFGfuYN0s6YsVtbxxNDDPF4qIoLbOMjn37f2phKlwGZfq8y63sLDUg5UD/UmupYjO8AQSrgbcDjbn9MjtSdtPo+0DiO0MLF3AwYy+FcmWKAO3CgsSRisuw5JweJoAArhjiWpLBb2N2k8jNwAv+KWJ2mD9X0jheoCu+mFiWdNscyzKMB1zsPuD3FNpqyB8RN9OtjFlOPtAttpVi9xcW9zp1s00BAU7f8AqcZzzk/FFstdQCHODCaalHXbag3D7dw3pk5jt7aFlhaCYlGSIAEYbABOM/G2jalf+NSD2P1P3MU07WPqCoGAufy/lPesNEsbrEkJWC4JARxz+vxSOmudB9vImiim1fv8zNnvNSllOnMAZI5CQCuHz27+1bIrqwHHRmcdXcthU8ER26b6UAtf3hrXndU3rEDgoAe5HrS9tgHtSc2c+q/uPxHHSrqaK6jSCHdAEyTjBUHsc/lWQbeSc8A4kpa1ykuMS9dXkZA8ZnKs2V3ciiVuvqByMyXpJrIQ4OPEAX0/iRW11JJ4Vt+FAED+Tt5SQe/etQsoBCr8H9/pEUpLqrElT++4syT3emTSLdwxxwO+F8M/jH8p9v7c0sQt309x4oaFAbqUbq8eWBba6xbeMxkcBdo245/XIqUrwSy844nNqg1YXH1QFDGsAREbfMDsG0544P8AXNOOWY5lNOEWkt5jPbR6gls106MkaDknihqlncSLJDmim71K3PdEVxtkQnJP8pootw2PEap0u5dxMu3RvYVvINOlaBoGyV4yc9wD6Ac1S/0r1yDxLX6Y21jYef8AEE2XTck0Vxdah4huWXzsZWLAHIyM89jn/iusLVoq+JSmnDnfBthpUFxZSpOzeK52xtMcBiO4+vt8VVtUUYADqW/ghzuPMV44jY3r28ikLuO05ra09iWLgTAuUo0mupZ4ZB4S5FTYCvUlWzPZYRfWnibcTLQHTcMwyPgwHuKHa3cUsRGlaWop9ooLLmGBmnaJoR6huXsGcRxlCWbGTitJlysy2sKniPGm9LWundNT6FA7xpKpEkyjzNUevuG3HUX9LBLA9zI+oNJ/c+ptaaUgnK/eGViA4YeuPmlbsACa/wCHkEkmHeioEuZpl1BAtyApBYYcNg/07VnXq64sQ9TRS9S5Qdwx1Oph0qS9kkkyXCNCCdqY7fAz3/OrXsrBRnk+I3Q/uK/1l60aW+hhksirRXCEp2G315+QeKer1XsCL2JlpUmCzfSfMktbCxtbhIi80zMpLzFjhs+vyMn+9K34zljzzHRc5X2DAl3dGssg24VMBSPbHes1kUsT4EnkgD5gu21COZ7lo0Mccb7VlGCJD8f76VRkx5hQCeCIOt+oZftl9a3MRkSFtyeEO4PbFd6AIVs9wILB2HkQ3awWe0yiFUeQZYcZz8/ligPv+YQtZ0Io9Ux+FeWt8jO0MTlBAeRu5APzmnNM2/KefmFdmWvd8Rft9Um1UyXGZBKuGjiQcBR/xTZ0you1RmCq1TthjwIx6b0ra3eqRXbuHlKgygqCuRgjn3qfUWqvZuyfiLXOLbi4XGPPzDd5caYXWDxWuLhZ9hVh2HckjGTj39OKtTXZagcH2/EWOoqSzGOT557/AD6liW/tEgee3mG2TKKpGN7Ac49T6fpWW1IrBx4z/iPoFVcHruK93fXFrpWoQ3DNsU/cyEc7ieAKJSquy7fMNUVSrcRgD+0ni6ltrhja3MYVLcHxHPlwwHlPHFNW02KM59374iiWVv49p/f5xe1aRb+7jWyeScxqQoJyfTnP1qKga1O/jMNrLKyFUSi9vfgPJMDNHGCFCnd3xgY+uKKHryFHBMWo07MPUYZxmBtNW6XUbaW3jMjByyg8An59hTrsqqSYulbOwVfOZplrY3l/HHc6wVCKc+AmSoHtgdzWdbrd52r1HE0a0jc3JEuyNdW0SPaukKcskMYAYjHHH+KtUmxgzjd/aTrd7U7azg/y4kdk062jyRBYUuSJBI43vuUcHOec8frRNQ6Fz8eP08fYTM0z3KyhuO+fzgnUNekdVJuEL7VYqqkNnONoH0NWDk8OAcxqr1XZmU4Cn9/nKunyxyWDy3VwGvXGY1J4Dd9w+Tj+hqoprGct1Gb7rCoUAn+kmiaz6isohqUbQTnkPEmCSDtz9PWld9mltzWZL0031jeMEwLqtg1kWAfxFRyoYDvg+tei02rXU1gn6vief1GmbTuf/wAyGGdfDztGB3NEOJQQff6ekhNxERz3xSlwxyIzWR0ZBFZArn1pI2GNYxNa/Z/4y64Nmf8ApNu+K1D0Zk2jox8N2zztCoYH+IkVFQXnMC2/xAHVOg28jjUEsxJIiFcHgn86FeShFgHHULQzfTFrp0Ws+otdNeSJdQp4LW5TDZ74Pv8AlxVG22VgqePPzNPTDD4I5+ZzqFhd6jqF/aXJkFnJhrc7wufcEfHzSJ0hzuUc+I6+vpRQrnnkfEI6KIspp0M5ljthi5O0/i7gfNFsVVq2nvz94HTOMk1HjwPIz94dnnMxEbK+zlhkYJz6cVm2ajcMeDHK6yuT5gq8ndlEScJ+KRec/AoBcEYEaRcHJlCUtdKsZGCTtAqoyepxbBgPVLyPTb4rBES+AHkxnJBPl/r/AFo4QOMZlR3u/nK8OuTXdx4SuFWNh4mTnaKhqfTGTJFiE8GDOptQuLy3fCt9lJO0ntI2ewo+lrVW+8rqX9nEauien0WyEusKu+XLMioQB5cc/l6Vd71zsB4gSXC5PcLrDFcWzy6FAqpFJudnO0HH+/096GtnoH3nj9f/ACZeq99gO3n5HmV1tbKEC91EyNc7mwzdiM8dv+avqrijHZwY5o9MbVBIzj+ku2f2a4hZ/FV2IIVR/B8/WlVAKe7kzQs3K2AOII1jRxfWE9tA4R1IY5I83sWH5VWtvRYMeuoVytg2nzBOi6XaWErTzXRMF0BGTjISX2dfQZ4ol1jXJs8jqLW6bPXcr3un2lpci8WfwURQRGuSASeMewHtU12WFSjDJ/fcW9BXYbm4EHNPI0NwYiyzSOhZo8kKB/Fj/e1FCgEZ6GY9XhA1ZPP+sS7oWky218Y4ESXdIZHnIHY+mPQ9zQ7bhaBn8sS9dK0EkDvPM0K0tBPGqFS83ZMKM4qldW7iAtt2knPEoLoFqhmlfebnOPEfkg/8UzXYKnwRwIjqNIt3R5PnuV1002zTGZmYE7Y1XjeBxzxSzkHcRDaPTFPrOYuappfg2shswYTBmWLaMHjnaM/6aJTYS3Pc02qUJ7R/uVemlt7vS3We3ikmmbxWdVIKnnOT6D6e9M3XempQf25itVRsIsMLXmkQwutxaIGLLwjHKj/cUil2PaepfUUs43D6v6Sto0sN3Nc2t9aKC6glj/Ng4IH5n/RRn30FbFOP/Jn6Wr1mdWXrv84vTWc+nX8tndQsrK2cMO49CPyrbTUK6giZTV7WI+Jas7RDvwhCv/Ca7cDO2kQfewnT5isgIRuVNIWJzxHFORNe/Z5Gpa7nAzKAsZx6CtRsgcTKsb3RwlhyAwXzfFUAxIGTI1MjIQ4Dr/Ka45YSwwDEHUdLS16vF5aN5pIiLiJSMD2JOf6Utp6ny2BH67R7cnEsWUt3NDcyXC+Ed5C7CueO2f07fNGRraGdj14jGp09WqrReiP3x/medPRxWJuNxVN7vM0aElkOeCeayrbC4Iz18fvr7xxqAo9g78mdX+rC3VI02CVz5Fc4Le4FKei7cky/tDfeLlzriRz7r3xbVnG7bKuCPqM964aZj9JBlW1la4UjEJxTC5tUeym2hjgOoz/Q0JS1fYhQQ3MoalYrd2lzasGWZiB4rqRgep/qKujivDeZdSGyD1F+O3stISa2tw8jSBS7NztPqc/OaYax78EwO2ukkCTaGTJqS6feRrKkWJIIie7H1Pz64qbKwy5Tj5+cecQZ97EZmgw3CRykbgVZspsYZf3GKrYClotA4hGAcbD3iK2tbrbV9yDdBOwEi7/DDZ75PGP/ADRWv/iAAwHExtTpm0/NRP8A5/udDVLOW3ksVjKGJdpJTOR8HP5fNBsB7A7xHdBqWUBbO5P05eRNamHw3heSZhG2MkHI4z27c/nVxUy+/wC2YwNclzDHEI6gvg4ZdvnPnJGSR7fWlXwe4/Xz+kT76G7k19rO1McbSFXUscAsOQ31/wAUell2B27Em05JEO6rYRNGizNucrjav4eBg49xQWtYtuE7S0IBtxxEvXo/3bNE0ci/ekrkD+HHP/FOac+qCD4grk9G0WZ5PGPtG7pG83QkyAEhck/zAf8AulHrO/2w1vKZjj0pJdm5El1sVyxUKjZxxn29iP0rVrQVWIh7nnXd7tOzt+g/XEn6p0+aRTPYKTKHDOinBYdjihX0FjkS2l1npjDdCLEWpC6jIiGM53E8lR7/AFrNwVBBnohWvDwbf3DtJMnhl4o08+/kt8/FT7eAIavGcGCk022sdkUNzJBHJ2R2PfGdu7/imTa1gyw68xYVbD7WjPb2sxsY2RN6FcIpPPA7mkmYH7QxtUPgnmC7J0e4nUkCRdoYkDnA9DTeosLKq9gCLaZQjO3kkxgk0q16j0a0nuxtn2eSZO4HYUtVc9bYEzrkUuSIr3Wl3mjyhbsZhZvJKOzf4rWqt3jIijLg4lTVrL95QRI34kOcj2ozcyo+IW0TWZtEvlmhYlSR4qfzr6j6/NaYx5mbYmRxNTs9Vt9RsVurJ90ZO1vdT7EUFwVMErCWmwYsKCDVwABILcxM13TdKbV8W18lnq7pkK7YWYHtn0PbsaURmqsLIf0h1dcAOOP7RNn1X7JNPYavHJaXJBjMe3HiYJ2upHGMUwb6tQhJHPxG6hbX7UOQfPxPIl1FXlEmYo2iEbS/hExBwpb2yOayL7VZzvGDjHAxNTT0uiBVOcHPzOrPVdPEsl9cShpYCqw2QjLspB4x6Ht34o1fpbd7dn7f5z/j9YlqBc9oFS8Dz8xS6hvl1C6Ny3jxGXk5w4OD+H4/9VFFYqTYOpXUZLDvMs6BqoExElw+13DKmNu09hS2ooOPaOo7pLf+rmP0zG5tQHYkgYPHeskE7uY4PbF/U9NlkiMW7w9ww2zhiM5707Vds5xKMnqcResb/T9L6qimeWVoFBSRzz5sYzmnStjaf2j3eIm9iJdheo4wXOmXd9LciKVplBaJ4ySB355/T86UKW+ngnIH9JNup09dwx9RI5n2t2tze/ZI3UcOGdi3lAyO/t6UKuwVnmR+JUl9rA98QdH0/PDr81xJJ4UKArswGEnr3HbsPk06rLbRg4+0zaCKmLW+Ix6TJvuUvIZI0sSv3MZOTu9aG62V1d8fE166aWbdWOT3KGsJPqN/FCgkSLiRJUbGWHofYUFCoQsY3ZW5IUcAQD1TeWtlfxTtNm5VVC7e6n3q2nrsdcDqWtuSscnmSXfU1tJbRiO7hDkeYKp59+PSrLpmzjbKJrq1GTxFa5+06veQy2qZZGASL0C55JPvTqbalIaKX2ve4sT8v0jv0qjwCaG5VTLByFHIIbn/AIrNuYB9y9GaSZ24Maork2c8bBSFQh85wT8VZbiGBJ6gjQr1lRxmO0JXw/GYA8ZX869CoB93zPJvwdp8TPetdGvreGXUdDIjVjumj29gDklf+RWZbQA24jgzTr/EbvRFankQLDe/cW32qTdcFFLJxluPas0qd+VHE9FVYDWA31EQNrt00lyou5dgPJQ9gPy/v809QXKkAZiWsNasCTiFdH6miNp4MKzYUfiYHFLWaYodzy6aqvUN7RB+nibU9XlNvPsjXygmP8RPfP8AvpU2stagYgha29viaPpFp9jtILUtkRrgnHH5UNEDNuMXsfHUv32lQanamCZQQfjkfSn1qIGVihs55iPf9O6hpkhVY2lgJwjryfoaYTOMmV3iBLzHhqw9BjPxWniJEy1ofUN5pVw32UqyOBuRwSpx2OAe9Tn5gXrDHPmOF7+0OEaFNN9mdb5E8sEYzvPwf80K08cQfpuDgzLNF16XqLUbh9TlBlkXuwyEI7ED4zVKqhv5hTwuPEbopoY4I7LXo5L+yUAJcY3TwHHofUfBpWypN2W4b5/fiHTcg3JIbuy1CxsvtVjJFrGjv51nh5dV+R2P04NI31EP7u/nwf8AybOm/EQQABx/WVll0WQx3c15CrNgoT5W4/3tSzC4E4X+U0BZQUGCJBJb6Fc3bySajEUIAVFIAUfHzXKbkXAWRvobtgYK1WOy0qRXtruOdWBAjGMr7DijpvtGCCIGyymsZGCZf0vqG6t7XddeEyfwjdzj8qFbpqy+FlEZypLjmXdVv7zVLIR2Nq0ZnGBKfxAevFCrFdRyxzIe0hTiWdG/Z/PBYK2oxqD7M2SR6E08xy25jiZlrZXCcy6/St3po8fR5wAvm8BzmNjjBPuOPaj2om0sOv3/ADiaLucbxzLFkLsr4V5ut5JAwDHDDPrtPqOKzG9oHGQOpu7UuqKHuV7vT5TP99ck+Uney8seOeDwarU+RtmPr9y7d8hs4bmyWPx4rVLSNctLnaSfQ0e0q/Oefiaul3VqCepS1bqB5tydPRSS3D+UzMhCIMdwCOf7VVKgpzaf0hn1G4YT+cUh0rezzPNcvM8jnLHuc+9NfxyDCqMTPNR+rdmW5ejZhYPcQTO5j4ZJF5H/AIrv4v3YYSTXkcSnpd+dIuAl6hUg5VvRqm+n1hlZalzUDmOmi3Frc3DygtG8mMsORk9gaRWliQp8TTpvFte5Ifj8aWNhPbmMgYAfvx6/SqNSVIBEIGXsGNWhXwvdHhKEkoPDcY9R/nvXoNK4elcTzGvpNWoYHzz/ADluHTDPIZJGcLxwD7UT08mKhiOIpdXdHQW851SxXOT97Eo5xjuB6/IrP1mmIXNf8ps/h+qUuBb38xDaKLxLi6uFV4512PDJ5RsHbnuD60rTawG1TNTVUo43OP5wZb20+pq1ro7yZBXcyMcAeozTB+oErMtXav2qePman0p0+NLso1hhy+MsTyc1FelZiXbuDfUeIceCYHc6lcUY0Yg/UzJoywxtHB96leOJRueZ3IzdjyPY1LDEqOZk0tuyLLDOMMhKEn0Pof1rSEGRxBLkoQccg4PzUiDaXMI6bgcNjGR396grmdmJWq20uk6iL23yImbLAcAE1Rfa3MhxkcR90q4/fWnLJbOXdAfLnnGOR+uaLdV6gyJWuzbw0F3txqmmM9709O1vLj7+3jI8OUfKds1n4xw3UZesEZE50nqXpfWpGXqbSorO6bvdW4Kxsf8AuUdq56SikV/v9IIO2fdzHCy/Z5o108N1DIwtJVJUbtytxwQfrilavVPFnHcYZ0x7JLadC2FlNmRRHMuQWiGCaVtvdTsPiMV9ZBhmx6Q0wzI4hDN/3YoSUPccbuIR9SypgxksdDsraUSGINtORu5x7U9ptFTS2e4lbczjE+vUfxJvVNx81KajfvY+IavG0fMD3KSMwRMlcdhV2zbtx1OBCAwte6NbzwCF4R4QAIUEjB9+PWtj0kKhCOIotzo28HmApulpZWGzUJ0U5Cq6g8e3zSv/APOGSVbEvfrVuAFi5x954nQ1uzq1zI93Io//AKHJAHsB2xQL/wANux7H/wASy67IxiGrbp6GGMoIk24/CqACg1/g+PrbMsdZnqRT6NGWGIOR2OKc9FlGBI9UN3Kt1ZqI2jkt9pIxnHf60jqUJ5PcaqcDgRC6k6ahdG8mImPB9UNBr1j18EQ2wdgwVa6Zc2kcS7mCxOFL5xuBIwfyoqvvJYf6nI+18MeD8RqS4nSF/Dus26LlpZZM8/H6+tD3ORgtn9/vuaiqgAHmEuhNWVtSnsmYt4/nRm9SMDvWloLEBKjjMxvxVWJHyJpKIFCjmtOY4+ZBPEsx2vnAqrKCMSRxM5636CS/Z7rTdysB97Apwsg7nA9/XFI2UFeaxNCvVsw22HIlHp6C204Q20MaxqOWwMZPzU0sG77lLcjqO9pdBj5M498U9kAcRQ5MI+PCEy5A96EzDzJGRAV/1BpFvKf/AJK1Q+q+IKUsBBysZQgjBlKXq/SRgLI8x/miQkfqa7JPcttAPEW9YthKI7xfMrcSY9BWmV2mAB3cRcuEUmTPdRjj1+a6cwyJ7bjdCwK4bP8ASrGCEqX1qkyGKVco2QRVGGZaL2lX910rq20Mxt2PlPofj61aqzYYKxI55+0Wz31oxkhbzOR6Z9foaDfUQdyxii0EbTFrWNIguh9qt0+8/E6Af9T/AM/3pMWFeIc1iar+zbUV1bp9LWRcPZ+T6j/cUYqL6xn/AKxY/wDG5x5hDrC31dpbe40SVEIBSZJcYb1B+vcfmKQ1qV9kQ+nY9Sr+z/W7++kvRqLJujChMJtPJOf7VTTslYYiXtUtxHJHDty3I9fir12bjBsuJzfS7o9kfYVF53jC9S9S4PMBy2bTXULQnaTIFYDjIoFCbXEtbyMxt4z8VtiIz0CMgjjmrkyJyAuA2PMO9VVsjM6d5yKtOngwcg96rJziCp5t7lHA2j0rMZmdzmMqMCVryziuoSpAUkY3e/1oN6gjJha3KmALvpFZ7V0W6A3dht/DVlYengf07l9wD5gY9FawSI4bi35UpuOQNv05qa6mz7DHT+IJtAYHjqX9H6HvrGSCT95IJIZg4Aj4ODnBOe3pRE0reoGB5i1+vFilcZz95pSEbRj+npWpuzMjE8AO7Ge9dOn00e9cDjHtXMMiSDiJ+vaQUuGvrOBXk/8AsQjv8j5pFhsbdiNI24bTJtPuJxAWYoigZODgAUVLt44lGr2xQ6563sPs02i2MpmvrhNpZfwIp9d3Y8e1W7GZQg/TFDTILeCKNDCu8D8TChbeeYwpAhhgO4UH8+1EAA6lxzDtmyi8MFyN0bZGPcGtEjIzEx3iCNY077HdlF80TjdG/ow/zQGyIZOZTt8IW8QhMLxkd67J7lSAJX8UtuUqOfcVaUgzUbOK9tjDIv0OOxqCMzoE0rVLvp28Ftc+aBjt834WHsR7VZHI4MCy45Ea54IHtft+mMXtv44xy8Z+fcfNBt0n/ZOoxVqQRtbuFP2e6hHp2sSmchI7ocsTwG/81WpNvUrblhNRuJVaLKruR/mgar6cGTT3mLej6PFpFxeTBy8k8hZTj8Keij881gX2FcJ8f1mmi7hmHlk8wVTzjg0RLA3EqUnwldFJbnNOVv7MGBZfdK2ZGfMBwfripp+qRaOOJ1PLMqYYvn/9U8zKRgGJFWByZNbwy3CKUMmMe5qBpmPOYPf4k1wbyyZT4rMvseahlsqPBlwcy7a6gsoAlXa/uO1GViRmRnxO/tTASlsYH4SKhn2qWkjk4lUQll3nu3NJLUcbofcOpHKSg24OKpYpwVMumM5kAmIfmgIpAhjzLsHnwRzT1QzzF344ljiM5YYo/KnJgsZlqKRWXy0deRxB+Zz4ux85oQfB5lsZllWBBOaPxKSjdKGyQeaE4yciXVop9VdO3F7Cj2MziDvLaqQBJ/vt2oFmnIUmuMVXLuAs/nMZuo/tX7QLqMxGNIAIwhXGAqgevzmmKUwgUwVpDWHEYpBmfcqrtXgemKh+4VBxPluVjYllzn0POKEWEMqmMF993PGU4IbH6GtKKH5lqVBcaZIJefBbKH1HNVYZE5eDFq8Qblkydxqiyz9ytMMuT6kVYjgynmcRICr59KqJxgnV7SG5ilWVc4XIPqDUNIgjpLU7qzvHWGThWxhucj2NMUMSMGL2AA5E0e6061j1u32RAJNEZWj/AIQfj4qmpQAkiTQ5IwYd6E1O5uxcWdwVeKJjsJHI+M0m6gpzDrw3EO6v5RGR9KwfxCtRgzS0rHkTi2lbxlXjAFIVMcxphCC+YYNaVJzgGKuJ9NGqoCowfinXUKvEB3IIGMj7X5FBQkmSwGIXsTsYooAArS09hLFTE7EHckucSKQ4B4ozSmOJWEKLGpA5pa446lkUZkUpIGPSlixIxChQDOmkbC80dWOAIM9ziUlu9RcoIlkJzIdgMRzQq1GIZmMksZGVio7USnuRYOJZLF28xpkqCYuCRLEXlIIpgAAQZ7nFwx3Z+aQt+qHTqXIidn5U0vUEe5wVDbiRyBUEzpFGdx2ntXVk9Tmin1/olhJYvqfgBbyJeJl4JHsfcUVhxOrPMzi2ctDz64yKWzkRxRO7uNROVA4wDQWhxP/Z" width={200} />
      </div>
    </Card>


    <Card style={{ width: 625 }}>
      <div style={{display:"flex" }}>
        
        <div>
        <h2>Beef Handii</h2> 
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsam soluta? Id velit provident nostrum magnam fugit necessitatibus, 
            dicta quae soluta sit molestiae eum cum veritatis, debitis consequatur at excepturi?</p>
            <br />
<p style={{fontWeight:"bold" , fontSize:"21px"}}>RS:1500</p>

        </div>
        <img style={{borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkLYeVZDWXJl19oBRE5d3XjzoduljJYTZVH4OZQYtRnA&s" width={200} />
      </div>
    </Card>
  </div>




  
  <center>
   
    <h1 style={{background: '#ECECEC',  color:"red"}}>Fast Foods</h1></center>

    <div style={{ background: '#ECECEC', padding: '30px' , display:"flex" , flexWrap:"wrap" , gap:"30px" }}>
    <Card style={{ width: 625 }}>
      <div style={{display:"flex" }}>
        <div>
        <h2>Zinger Burger</h2> 
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsam soluta? Id velit provident nostrum magnam fugit necessitatibus, 
            dicta quae soluta sit molestiae eum cum veritatis, debitis consequatur at excepturi?</p>
            <br />
<p style={{fontWeight:"bold" , fontSize:"21px"}}>RS:500</p>

        </div>
        <img style={{borderRadius:"10px"}} src="https://www.shutterstock.com/image-photo/crispy-breaded-chicken-burger-mozzarella-600nw-1418912660.jpg" width={200} />
      </div>
    </Card>

    <Card style={{ width: 625 }}>
      <div style={{display:"flex" }}>
        <div>
        <h2>Zinger Sandwich</h2> 
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsam soluta? Id velit provident nostrum magnam fugit necessitatibus, 
            dicta quae soluta sit molestiae eum cum veritatis, debitis consequatur at excepturi?</p>
            <br />
<p style={{fontWeight:"bold" , fontSize:"21px"}}>RS:700</p>

        </div>
        <img style={{borderRadius:"10px"}} src="https://i0.wp.com/www.asheescookbook.com/wp-content/uploads/2017/01/zinger-club-sandwich.1024x1024-3.jpg?fit=1024%2C880&ssl=1g" width={200} />
      </div>
    </Card>

    <Card style={{ width: 625 }}>
      <div style={{display:"flex" }}>
        <div>
        <h2>Broast</h2> 
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsam soluta? Id velit provident nostrum magnam fugit necessitatibus, 
            dicta quae soluta sit molestiae eum cum veritatis, debitis consequatur at excepturi?</p>
            <br />
<p style={{fontWeight:"bold" , fontSize:"21px"}}>RS:800</p>

        </div>
        <img style={{borderRadius:"10px"}} src="https://i.ytimg.com/vi/B8aNC_t3aTw/maxresdefault.jpg" width={200} />
      </div>
      
    </Card >


    <Card style={{ width: 625 }}>
      <div style={{display:"flex" }}>
        <div>
        <h2>Zinger Roll</h2> 
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsam soluta? Id velit provident nostrum magnam fugit necessitatibus, 
            dicta quae soluta sit molestiae eum cum veritatis, debitis consequatur at excepturi?</p>
            <br />
<p style={{fontWeight:"bold" , fontSize:"21px"}}>RS:200</p>

        </div>
        <img style={{borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsIQQ3iPvIf8e_dhprN518tb__EmSEO25sdxplLPHCw&s" width={200} />
      </div>
    </Card>
  </div>




  <center>
    
    <h1 style={{background: '#ECECEC',  color:"red"}}>Chinese Foods</h1></center>

    <div style={{ background: '#ECECEC', padding: '30px' , display:"flex" , flexWrap:"wrap" , gap:"30px" }}>
    <Card style={{ width: 625 }}>
      <div style={{display:"flex" }}>
        <div>
        <h2>Kung Pao Chicken</h2> 
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsam soluta? Id velit provident nostrum magnam fugit necessitatibus, 
            dicta quae soluta sit molestiae eum cum veritatis, debitis consequatur at excepturi?</p>
            <br />
<p style={{fontWeight:"bold" , fontSize:"21px"}}>RS:900</p>

        </div>
        <img style={{borderRadius:"10px"}} src="https://www.allrecipes.com/thmb/gfiCEfmX4dpgde2EWVAvOO7d5Qw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/290890_original-f425d458ea2b4cec8d4a855ce6929707.jpg" width={200} />
      </div>
    </Card>

    <Card style={{ width: 625 }}>
      <div style={{display:"flex" }}>
        <div>
        <h2>Mapo Tofu</h2> 
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsam soluta? Id velit provident nostrum magnam fugit necessitatibus, 
            dicta quae soluta sit molestiae eum cum veritatis, debitis consequatur at excepturi?</p>
            <br />
<p style={{fontWeight:"bold" , fontSize:"21px"}}>RS:700</p>

        </div>
        <img style={{borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMDCiHO9XbkqpzBv6r_f-IGGgOU-HVIivtN-afks52A&s" width={200} />
      </div>
    </Card>

    <Card style={{ width: 625 }}>
      <div style={{display:"flex" }}>
        <div>
        <h2>Spring Rolls</h2> 
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsam soluta? Id velit provident nostrum magnam fugit necessitatibus, 
            dicta quae soluta sit molestiae eum cum veritatis, debitis consequatur at excepturi?</p>
            <br />
<p style={{fontWeight:"bold" , fontSize:"21px"}}>RS:500</p>

        </div>
        <img style={{borderRadius:"10px"}} src="https://t3.ftcdn.net/jpg/04/29/00/48/360_F_429004893_0Y3UYCrn4mf2iYi4ASKAa10LBvSl32pt.jpg" width={200} />
      </div>
      
    </Card >


    <Card style={{ width: 625 }}>
      <div style={{display:"flex" }}>
        <div>
        <h2>Chinese Hot Pot</h2> 
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsam soluta? Id velit provident nostrum magnam fugit necessitatibus, 
            dicta quae soluta sit molestiae eum cum veritatis, debitis consequatur at excepturi?</p>
            <br />
<p style={{fontWeight:"bold" , fontSize:"21px"}}>RS:1000</p>

        </div>
        <img style={{borderRadius:"10px"}} src="https://media.istockphoto.com/id/697932394/photo/korean-hot-pot-meal-hands-taking-food-with-chopsticks.jpg?s=612x612&w=0&k=20&c=U35S2Iv9O1woJmVohjrg9uM5C11ZAWRl1Qb0RireK6g=" width={200} />
      </div>
    </Card>
  </div>
    </>
  )
}

export default MenuCard
