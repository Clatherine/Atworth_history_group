
// function Publications (){

//     const RawlingsUrl = import.meta.env.VITE_PDF_URL_Rawlings;
//     const EducationUrl = import.meta.env.VITE_PDF_URL_Education;
//     const EvacueeMemoriesUrl = import.meta.env.VITE_PDF_URL_EvacueeMemories
// const EvacueeRecollectionsUrl = import.meta.env.VITE_PDF_URL_EvacueeRecollections;
// const EconomicUrl = import.meta.env.VITE_PDF_URL_Economic;
// const ClockUrl = import.meta.env.VITE_PDF_URL_Clock;
// const SchoolUrl = import.meta.env.VITE_PDF_URL_School;
// const ChurchUrl = import.meta.env.VITE_PDF_URL_Church
// const BierUrl = import.meta.env.VITE_PDF_URL_Bier
// const DowtyUrl = import.meta.env.VITE_PDF_URL_Dowty
// const MuseumUrl = import.meta.env.VITE_PDF_URL_Museum
// const TowerUrl = import.meta.env.VITE_PDF_URL_Tower
// const HistoryUrl = import.meta.env.VITE_PDF_URL_History

//     return(
//       <section >
//         <h2>Publications & Documents</h2>
//         <div>The Atworth History Group has produced various booklets in the past. These publications are now out of print, but scanned copies have been added here for reference. Click on the cards below to open the pdfs.<br></br><br></br></div>
//         <div id="publications_container">


// <div className = "publication">
// <a  href={ChurchUrl} target="_blank" rel="noopener noreferrer">
// The Church of St Michael - Atworth: {<br></br>}A Short History

// <div className="imageContainer"><img src="/images/Church_image.png" alt="image of Church publication pdf"/></div>
//       </a>
// </div>
// <div className = "publication">
// <a  href={ClockUrl} target="_blank" rel="noopener noreferrer">
// The Jubilee Clock Tower
// <div className="imageContainer"><img src="/images/Clock_only_image.png" alt="image of the Atworth clock tower"/></div>
//       </a>

// </div>
// <div className = "publication">
// <a  href={EconomicUrl} target="_blank" rel="noopener noreferrer">
// Atworth: An Economic and Social History
// <div className="imageContainer">

// <img src="/images/Economic_cropped_image.png" alt="image of an Economic and Social History pdf"/></div>
//       </a>
// </div>
// <div className = "publication">
// <a  href={EducationUrl} target="_blank" rel="noopener noreferrer">
// Atworth: An Oral History of Education
// <div className="imageContainer"><img src="/images/Education_cropped_image.png" alt="image of Education pdf"/></div>
//       </a>

// </div>
// <div className = "publication">
// <a  href={SchoolUrl} target="_blank" rel="noopener noreferrer">
// The School Masters & Teachers of a Village School
// <div className="imageContainer">
// <img src="/images/School_image.png" alt="image of School"/></div>
//       </a>
// </div>

// <div className = "publication">
// <a  href={RawlingsUrl} target="_blank" rel="noopener noreferrer">
// A Brief History of the Rawlings Family
// <div className="imageContainer"><img src="/images/Rawlings_family_image.png" alt="image of Rawlings family at Poplar Farm"/></div>
//       </a>
// </div>
// <div className = "publication">
// <a  href={EvacueeMemoriesUrl} target="_blank" rel="noopener noreferrer">
// Memories of a Wartime Evacuee
// <div className="imageContainer">
// <img src="/images/Memories_cropped_image.png" alt="image of Valerie Parsons and Tinker"/></div>
//       </a>
// </div>
// <div className = "publication">
// <a  href={EvacueeRecollectionsUrl} target="_blank" rel="noopener noreferrer">
// Recollections of a Wartime Evacuee
// <div className="imageContainer">
// <img src="/images/Recollections_small_image.png" alt="image of School"/></div>
//       </a>
// </div>
//         </div>
// <br></br>
//         <p>Below are some further documents related to the history of Atworth. Click on the links to open the pdfs.</p>
//         <ul>
        
//         <li className = "document">
// <a  href={ HistoryUrl} target="_blank" rel="noopener noreferrer">
// The History of Atworth from the Romans to the Third Millennium
//       </a>
// </li>
       
// <li className = "document">
// <a  href={MuseumUrl} target="_blank" rel="noopener noreferrer">
// Atworth History Museum - Radio Wiltshire talks to Professor Dowdeswell in 1989
//       </a>
// </li>
// <li className = "document">
// <a  href={TowerUrl} target="_blank" rel="noopener noreferrer">
// Atworth Church Tower - A report by Gervase O’Donohoe in July 2011 for the Atworth History Group
//       </a>
// </li>
// <li className = "document">
// <a  href={DowtyUrl} target="_blank" rel="noopener noreferrer">
// The Dowty in Atworth - An article by Des A. E. Rice for the Atworth History Group
//       </a>
// </li>
// <li className = "document">
// <a  href={BierUrl} target="_blank" rel="noopener noreferrer">
// The Atworth Bier - Radio Wiltshire talks to David Webb on 25 February 1993
//       </a>
// </li>
// </ul>
//         </section >
//     )
// }


// export default Publications;

function Publications() {
      const RawlingsUrl = import.meta.env.VITE_PDF_URL_Rawlings;
      const EducationUrl = import.meta.env.VITE_PDF_URL_Education;
      const EvacueeMemoriesUrl = import.meta.env.VITE_PDF_URL_EvacueeMemories;
      const EvacueeRecollectionsUrl = import.meta.env.VITE_PDF_URL_EvacueeRecollections;
      const EconomicUrl = import.meta.env.VITE_PDF_URL_Economic;
      const ClockUrl = import.meta.env.VITE_PDF_URL_Clock;
      const SchoolUrl = import.meta.env.VITE_PDF_URL_School;
      const ChurchUrl = import.meta.env.VITE_PDF_URL_Church;
      const BierUrl = import.meta.env.VITE_PDF_URL_Bier;
      const DowtyUrl = import.meta.env.VITE_PDF_URL_Dowty;
      const MuseumUrl = import.meta.env.VITE_PDF_URL_Museum;
      const TowerUrl = import.meta.env.VITE_PDF_URL_Tower;
      const HistoryUrl = import.meta.env.VITE_PDF_URL_History;
    
      return (
        <section>
          <h2>Publications & Documents</h2>
          <div>
            The Atworth History Group has produced various booklets in the past. These publications are now out of print, but scanned copies have been added here for reference. Click on the cards below to open the pdfs.
            <br />
            <br />
          </div>
          <div id="publications_container">
            <div className="publication">
              <a href={ChurchUrl} target="_blank" rel="noopener noreferrer">
                The Church of St Michael - Atworth: <br /> A Short History
                <div className="imageContainer">
                  <picture>
                    <source
                      srcSet="/images/Church_image.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/Church_image.png"
                      alt="image of Church publication pdf"
                    />
                  </picture>
                </div>
              </a>
            </div>
            <div className="publication">
              <a href={ClockUrl} target="_blank" rel="noopener noreferrer">
                The Jubilee Clock Tower
                <div className="imageContainer">
                  <picture>
                    <source
                      srcSet="/images/Clock_only_image.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/Clock_only_image.png"
                      alt="image of the Atworth clock tower"
                    />
                  </picture>
                </div>
              </a>
            </div>
            <div className="publication">
              <a href={EconomicUrl} target="_blank" rel="noopener noreferrer">
                Atworth: An Economic and Social History
                <div className="imageContainer">
                  <picture>
                    <source
                      srcSet="/images/Economic_cropped_image.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/Economic_cropped_image.png"
                      alt="image of an Economic and Social History pdf"
                    />
                  </picture>
                </div>
              </a>
            </div>
            <div className="publication">
              <a href={EducationUrl} target="_blank" rel="noopener noreferrer">
                Atworth: An Oral History of Education
                <div className="imageContainer">
                  <picture>
                    <source
                      srcSet="/images/Education_cropped_image.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/Education_cropped_image.png"
                      alt="image of Education pdf"
                    />
                  </picture>
                </div>
              </a>
            </div>
            <div className="publication">
              <a href={SchoolUrl} target="_blank" rel="noopener noreferrer">
                The School Masters & Teachers of a Village School
                <div className="imageContainer">
                  <picture>
                    <source
                      srcSet="/images/School_image.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/School_image.png"
                      alt="image of School"
                    />
                  </picture>
                </div>
              </a>
            </div>
            <div className="publication">
              <a href={RawlingsUrl} target="_blank" rel="noopener noreferrer">
                A Brief History of the Rawlings Family
                <div className="imageContainer">
                  <picture>
                    <source
                      srcSet="/images/Rawlings_family_image.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/Rawlings_family_image.png"
                      alt="image of Rawlings family at Poplar Farm"
                    />
                  </picture>
                </div>
              </a>
            </div>
            <div className="publication">
              <a href={EvacueeMemoriesUrl} target="_blank" rel="noopener noreferrer">
                Memories of a Wartime Evacuee
                <div className="imageContainer">
                  <picture>
                    <source
                      srcSet="/images/Memories_cropped_image.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/Memories_cropped_image.png"
                      alt="image of Valerie Parsons and Tinker"
                    />
                  </picture>
                </div>
              </a>
            </div>
            <div className="publication">
              <a href={EvacueeRecollectionsUrl} target="_blank" rel="noopener noreferrer">
                Recollections of a Wartime Evacuee
                <div className="imageContainer">
                  <picture>
                    <source
                      srcSet="/images/Recollections_small_image.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/Recollections_small_image.png"
                      alt="image of School"
                    />
                  </picture>
                </div>
              </a>
            </div>
          </div>
          <br />
          <p>Below are some further documents related to the history of Atworth. Click on the links to open the pdfs.</p>
          <ul>
            <li className="document">
              <a href={HistoryUrl} target="_blank" rel="noopener noreferrer">
                The History of Atworth from the Romans to the Third Millennium
              </a>
            </li>
            <li className="document">
              <a href={MuseumUrl} target="_blank" rel="noopener noreferrer">
                Atworth History Museum - Radio Wiltshire talks to Professor Dowdeswell in 1989
              </a>
            </li>
            <li className="document">
              <a href={TowerUrl} target="_blank" rel="noopener noreferrer">
                Atworth Church Tower - A report by Gervase O’Donohoe in July 2011 for the Atworth History Group
              </a>
            </li>
            <li className="document">
              <a href={DowtyUrl} target="_blank" rel="noopener noreferrer">
                The Dowty in Atworth - An article by Des A. E. Rice for the Atworth History Group
              </a>
            </li>
            <li className="document">
              <a href={BierUrl} target="_blank" rel="noopener noreferrer">
                The Atworth Bier - Radio Wiltshire talks to David Webb on 25 February 1993
              </a>
            </li>
          </ul>
        </section>
      );
    }
    
    export default Publications;
    