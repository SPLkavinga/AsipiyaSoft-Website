import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages copy/Home'
import AboutUs from './Pages copy/AboutUs';
import Contact from './Pages copy/Contact';
import Vacancie from './Pages copy/Vacancie';
import Intern from './Pages copy/Intern';
import Microfinance from './Pages copy/MicroFinance';
import Services from './Pages copy/Services';
import Prawing from './Pages copy/Prawing';
import Leasing from './Pages copy/Leasing';
import ERP from './Pages copy/ERP';
import UiUxIntern from './Pages copy/UiUxIntern';
import DigitalMarketingIntern from './Pages copy/DigitalMarketingIntern';
import QAEngineer from './Pages copy/QAEngineer';
import SearchEngineOptimizationSpecialist from './Pages copy/SearchEngineOptimizationSpecialist';
import CustomerCareExecutive from './Pages copy/CustomerCareExecutive';
import BusinessAnalyst from './Pages copy/BusinessAnalyst';
import GraphicDesigner from './Pages copy/Graphic Designer';
import AssociateSoftwareEngineer from './Pages copy/AssociateSoftwareEngineer';
import InternBusinessAnalyst from './Pages copy/InternBusinessAnalyst';
import BlogList from './Pages copy/Blog/BlogList';
import BlogPage from './Pages copy/Blog/BlogPage';
import InvoiceSystem from './Pages copy/InvoiceSystem';
import AddCareers from './Admin/AddCareers';
import ShowCareer from './Admin/ShowCareer';
import Admin from './Admin/Admin';
import CareerNew from './Admin/CareerNew';
import CareerDetails from './Admin/CareerDetails';
import ApplicationsPage from './Admin/ApplicationsPage';
import ContactFormdetails from './Admin/ContactFormdetails';

import Landingpage from './Admin/Landingpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutUs />} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/vacancie' element={<Vacancie/>}/>
      <Route path='/intern' element={<Intern/>}/>
      <Route path='/UiUxIntern' element={<UiUxIntern/>}/>
      <Route path='/DigitalMarketingIntern' element={<DigitalMarketingIntern/>}/>
      <Route path='/QAEngineer' element={<QAEngineer/>}/>
      <Route path='/SearchEngineOptimizationSpecialist' element={<SearchEngineOptimizationSpecialist/>}/>
      <Route path='/CustomerCareExecutive' element={<CustomerCareExecutive/>}/>
      <Route path='/BusinessAnalyst' element={<BusinessAnalyst/>}/>
      <Route path='/GraphicDesigner' element={<GraphicDesigner/>}/>
      <Route path='/AssociateSoftwareEngineer' element={<AssociateSoftwareEngineer/>}/>
      <Route path='/InternBusinessAnalyst' element={<InternBusinessAnalyst/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Microfinance' element={<Microfinance/>}/>
      <Route path='/Prawing' element={<Prawing/>}/>
      <Route path='/Leasing' element={<Leasing/>}/>
      <Route path='/Invoice' element={<InvoiceSystem/>}/>
      <Route path='/ERP' element={<ERP/>}/>
      <Route path="/Blogs" element={<BlogList />} />
    <Route path="/Blog/:slug" element={<BlogPage />} />
    <Route path="/Landingpage" element={<Landingpage />} />
    <Route path="/Admin" element={<Admin />} />
    <Route path="/AddCareers" element={<AddCareers />} />
    <Route path="/ShowCareer" element={<ShowCareer />} />
    <Route path="/CareerNew" element={<CareerNew />} />
    <Route path="/career/:id" element={<CareerDetails />} />
    <Route path="/ApplicationsPage" element={<ApplicationsPage />} />
    <Route path="/ContactFormdetails" element={<ContactFormdetails />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
