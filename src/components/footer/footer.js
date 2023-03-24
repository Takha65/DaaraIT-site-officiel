import './footer.css';
export const Footer = () =>{
    return(

        <body>


        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <form className='container'>

                            <h4>Pour nous contacter</h4>
                            <div className='row'>
                                <div className='col-6 form-group'>
                                    <input type='text' placeholder='Prenom et Nom' className='form-control'></input>
                                </div>
                                <div className='col-6 form-group'>
                                    <input type='email' placeholder='Email' className="form-control"></input>
                                </div>
                            </div>
                            <div className='row' id='espace'>
                                <div className='col-6 form-group'>
                                    <input type='text' placeholder='Objet' className="form-control"></input>
                                </div>
                                <div className='col-6 form-group'>
                                    <input type='number' id="telephone" name="telephone" placeholder='Telephone' className="form-control"></input>
                                </div>

                            </div><br />
                            <div className='col-12 form-group'>
                                <textarea id="message" name="message" defaultValue='Votre message....' className="form-control"></textarea>

                            </div>
                            <div className='form-group'>
                                <button className='btn btn-primary'>Envoyer</button>
                            </div>

                        </form>
                    </div>
                    <div className='col-md-6'>

                    <iframe id="map" src="https://maps.google.com/maps?width=900&amp;height=640&amp;hl=en&amp;q=Dakar%2C%20vdn+(Title)&amp;ie=UTF8&amp;t=p&amp;z=16&amp;iwloc=B&amp;output=embed" scrolling="no" ></iframe>

                        {/* <p>@{new Date().getFullYear()}     Tous droit reservees</p> */}
                    </div>
                </div>
            </div>
            <div >
                <form id="bas">
                <h3><em>Abonnez-vous à notre Newsletter pour vous tenir informer de nos activités</em></h3>
                <input type="email" placeholder='Email'></input>
                <button className='btn btn-primary' id='boutonbas'>Envoyer</button>
                </form>
            </div>
            <p>&copy; copyright 2023 Daara-it All Rights Reserved</p>
        </footer>





    </body>


    )
}