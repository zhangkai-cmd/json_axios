import { Button } from 'antd';
import './index.scss'

function Home(props) {

    return(
        <div className="home">
            <div className="first">
                <div className="left">
                    <div className="hyper">
                        <div>
                            <h3>HYPERTHERMIA IS EFFECTIVE</h3>
                            <h3>IN THE TREATMENT OF NASAL CONGESTION.</h3>
                        </div>
                    </div>
                </div>
                <div className="right"></div>
            </div>
            <div className="two">
                <h3 className="title">
                    <div>RHINOTHERM</div>
                    <div>IS BASED ON</div>
                </h3>
                <div>
                    <p>Briefly the scientific rationale of Rhinotherm is based on the work of Prof. Andre Lwoff (Pasteur Institute - France) who studied the effects of temperature on the development of viruses, and later work of researches from the Weizmann Institute of Science (Israel) which discovered that Hyperthermia is effective in the treatment of Nasal Congestion. The company has further developed this concept into an advanced and robust technology.</p>
                    <Button type="primary" ghost onClick={()=>{
                        window.document.screenTop = 0;
                        props.history.push({
                            pathname: '/about'
                        })
                    }}>READ MORE</Button>
                </div>
            </div>

            <div className="three">
                <dl>
                    <dt>
                        <span></span>
                    </dt>
                    <dd>
                        <h3 onClick={() => {
                            props.history.push({
                                pathname: '/lwoff'
                            })
                        }}>ABOUT André Lwofff</h3>
                        The Nobel Prize in Physiology or Medicine 1965
                        Born: 8 May 1902, Ainay-le-Château, France
                        Died: 30 September 1994, Paris, France
                        Affiliation at the time of the award: Institut Pasteur, Paris, France
                        Prize motivation: "for their discoveries concerning genetic control of enzyme and virus synthesis."
                        Professor Andre Lwoff studied the effects of temperature on virus development and infection, and the Research team in Israel discovered that hyperthermia was effective in nasal congestion.
                    </dd>
                </dl>

                <dl>
                    <dt>
                        <span></span>
                    </dt>
                    <dd>
                        <h3 onClick={() => {
                            props.history.push({
                                pathname: '/institute'
                            })
                        }}>ABOUT WEIZMANN INSTITUTE</h3>
                        <p>The Weizmann Institute of Science is one of the world’s leading multidisciplinary basic research institutions in the natural and exact sciences. It is located in Rehovot, Israel, just south of Tel Aviv. It was initially established as the Daniel Sieff Institute in 1934, by Israel and Rebecca Sieff of London in memory of their son Daniel. In 1949, it was renamed for Dr. Chaim Weizmann, the first President of the State of Israel and Founder of the Institute</p>
                        <p>The Weizmann Institute has a long history of investigation and discovery rooted in a mission of advancing science for the benefit of humanity. In parallel, it educates a substantial proportion of Israel’s scientific leadership and advances science literacy in schools and among the public.</p>
                    </dd>
                </dl>
            </div>
            <div className="four">
                <div className="content">
                    <div className="left">
                        <h3 className="title four-title" onClick={() => {
                            props.history.push({
                                pathname: '/product'
                            })
                        }}>RHINOTHERM ULTRA III</h3>
                        <p>Is a novel medical device designed for the consumer market and can be used in every home, school, office and geriatric care for the treatment of, Nasal congestion, Allergies, Sinusitis and more. The unique device is a Natural alternative for using drugs to treat nasal congestion symptoms. The Rhinotherm Ultra 3 device is a new generation of a previous model which had been sold to clinicians around the world. Several years of development resulted in an improved technology and re-designed device suitable to the private consumer. The device is based on hyperthermia technology, operates on highly important principle of delivering 100% water- saturated pressurized air at a temperature around 43°C (110°F) directly to the nasal passages via a hand-held tube. Duration of a treatment is only 20 to 25 minutes and on average offers the patient a fast relief that can last up to several days even several weeks. When suffering from Nasal congestion or during allergy season, between two or three treatments per day are recommended for maximum relief.</p>
                    </div>
                    <div className="right">
                        <span className="img"></span>
                        <div className="content">
                            <p>delivering 100% water- saturated pressurized air at a temperature around 43°C (110°F) directly to the nasal passages via a hand-held tube.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="five">
                <div className="title" onClick={() => {
                    props.history.push({
                        pathname: '/studies'
                    })
                }}>
                    <h3>CLINICAL</h3>
                    <h3>STUDIES</h3>
                </div>
                <div className="text">
                    <p>Clinical studies conducted in USA, Germany, Italy, the Netherlands, UK, Israel and Japan showed impressive results in treating both children and adults suffering from all kinds of nasal congestion, including viral congestion, chronic congestion, sinusitis and allergies。</p>
                    <ul>
                        <li>Double blind prospective design</li>
                        <li>990 participants</li>
                        <li>Israel, U.K, France, Germany, Italy ,Holland, Japan</li>
                        <li>75%-80% reported significant symptom relief</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home