// import { Document, pdfjs } from 'react-pdf';
import resume from './images/StephenTorku-CV(online).pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {
    return (
        <div className="resume-main">
            <div className="container">
            <embed src={resume} type="application/pdf" width="100%" height="900px"/>
            </div>
            
        </div>
    );
}
export default Resume;
