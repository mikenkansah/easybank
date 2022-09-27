import firstpic from '../assets/icon-budgeting.svg';
import secondpic from '../assets/icon-api.svg';
import thirdpic from '../assets/icon-onboarding.svg';

const WhyChoose = () => {
    return ( 
        <section className="bg-slate-100 px-10 pt-[7rem]">
            <article className="">
                <h1 className="text-4xl font-semibold pb-5">Why Choose EasyBank?</h1> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias minus
                    <br></br> nesciunt quam tenr cumque iure!</p>
            </article>
          <div className="flex flex-col md:flex-row justify-center   align-middle">
            <article>
                <div className="">
                  <img className="max-w-[100]" src={firstpic} alt=""/>
                </div>
                <h1>Digital banking</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus explicabo ex deleniti possimus consectetur tempora dolorem eligendi repellat culpa dignissimos?</p>
            </article>
            <article>
                <div className="">
                  <img className="max-w-[100]" src={secondpic} alt=""/>
                </div>
                <h1>Digital banking</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus explicabo ex deleniti possimus consectetur tempora dolorem eligendi repellat culpa dignissimos?</p>
            </article>
            <article>
                <div className="">
                  <img className="max-w-[100]" src={thirdpic} alt=""/>
                </div>
                <h1>Digital banking</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus explicabo ex deleniti possimus consectetur tempora dolorem eligendi repellat culpa dignissimos?</p>
            </article>
            <article>
                <div className="">
                  <img className="max-w-[100]" src={firstpic} alt=""/>
                </div>
                <h1>Digital banking</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus explicabo ex deleniti possimus consectetur tempora dolorem eligendi repellat culpa dignissimos?</p>
            </article>
          </div>
        </section>
     );
}
 
export default WhyChoose;