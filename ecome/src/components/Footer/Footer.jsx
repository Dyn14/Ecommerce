import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='up'>
                <div className="listfooter">
                    <ul>
                        <li>RÉDUCTION POUR ÉTUDIANTS</li>
                        <li>S'INSCRIRE AUX E-MAILS</li>
                        <li>DEVENIR MEMBRE</li>
                    </ul>
                    <ul>
                        <li>Expédition et livraison</li>
                        <li>Statut de commande</li>
                        <li>Retours</li>
                        <li>Modes de paiement</li>
                        <li>Nous contacter</li>
                    </ul>
                    <ul>
                        <li>Actualités</li>
                        <li>Carrières</li>
                        <li>Développement durable</li>
                    </ul>
                </div>
                <div className="iconfooter">
                    <ul>
                        <a href="https://twitter.com/" target="_blank"><li><i class="fab fa-twitter-square"></i></li></a>
                        <a href="https://www.instagram.com/nike/?hl=fr" target="_blank" ><li><i class="fab fa-instagram-square"></i></li></a>
                        <a href="https://www.facebook.com/nike"><li><i class="fab fa-facebook-square" target="_blank"></i></li></a>
                        <a href="https://www.youtube.com/channel/UCUFgkRb0ZHc4Rpq15VRCICA"><li><i class="fab fa-youtube-square"  target="_blank"></i></li></a>
                    </ul>
                </div>
            </div>
            <div className='down'></div>
        </footer>
    )
}

export default Footer
