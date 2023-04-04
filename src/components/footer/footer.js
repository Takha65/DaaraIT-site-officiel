import './footer.css';
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form";
export const Footer = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
 emailjs.send(
    'service_s1p2mdp',
    'template_ab55ckl',
    {
        nom:data.nom,
        email:data.email,
        objet:data.objet,
        telephone:data.telephone,
        message:data.message

    },
    '9dtta57PWgM-3UTTH'
 )
    }
  
    return (
        <body>
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <form className='container' onSubmit={handleSubmit(onSubmit)}>
                                <h4>Pour nous contacter</h4>
                                <div className='row'>
                                    <div className='col-6 form-group'>
                                        <input  {...register("nom")} type='text' placeholder='Prenom et Nom' name="nom" className='form-control'></input>
                                    </div>
                                    <div className='col-6 form-group'>
                                        <input type='email' {...register("email", { required: true })} placeholder='Email' name="email" className="form-control"></input>
                                        {errors.email && <span className='text-[red]'>Champ obligatoire</span>}
                                    </div>
                                </div>
                                <div className='row' id='espace'>
                                    <div className='col-6 form-group'>
                                        <input type='text' {...register("objet")} placeholder='Objet' name='objet' className="form-control"></input>
                                    </div>
                                    <div className='col-6 form-group'>
                                        <input type='number' id="telephone" {...register("telephone")} name="telephone" placeholder='Telephone' className="form-control"></input>
                                    </div>

                                </div><br />
                                <div className='col-12 form-group'>
                                    <textarea {...register("message")} id="message" name="message" placeholder='Votre message....' className="form-control"></textarea>

                                </div>
                                <div className='form-group'>
                                    {/* <button className='btn btn-primary'>Envoyer</button>
                                 */}
                                 <input type='submit' id="buton"  className='btn btn-primary'></input>
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