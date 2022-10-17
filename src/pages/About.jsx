import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import Carousel3 from "../components/parts/Carousel3";
import Avatar1 from "../images/Avatar1.png"
const About = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <Container>
      <header>
        <div className="row justify-content-lg-between justify-content-center align-items-center py-4">
          <div className="col-md-10 col-sm-12 col-lg-6 text-center">
            <img
              className="img-fluid px-4"
              src={Avatar1}
              alt="svg to help illustrat the brain psychology"
            />
          </div>
          <div className=" col-sm-12 col-lg-6 text-center">
            <h1 className="display-5">السيرة الذاتية</h1>
            <Carousel3
              content1="هو أحد التخصصات الدراسية التي ترتبط ارتباط وثيق بالحياة المنزلية، حيث يختص بمعالجة كافة الأمور المتعلقة بالمنزل بداية من الولادة وانتهاء بالشيخوخة، منها الأزياء، الصحة، الموارد المالية الشخصية، تصميم المنازل، وهو أكثر شيوعاً بين الفتيات بهدف إنشاء جيل من الفتيات يمتلكن قدرة كبيرة على الاستفادة من المواهب والمهارات المتعلقة بمجال تصميم الأزياء، ومجال الخياطة، ومجال الطبخ وغيرها من المجالات المختلفة"
              content2="هو العلم الذي يهتم بإدارة المنزل وتنظيم شؤونه المتعلقة بتقييم الحاجيات الضرورية للاستهلاك، والحرص على توفير المتطلبات والاحتياجات الخاصة بالمنزل دون التعدي على الموارد المتاحة في المنزل، بالإضافة إلى تحديد مقدار المصروفات اللازمة خلال وقت معين، كما يعني بتدريب الأشخاص على عدم الإسراف والتبذير في الطعام أو الملابس، وحسن التصرف عند الاستهلاك"
              content3="تتوقف مدة دراسة تخصص الاقتصاد المنزلي على الدرجة العلمية التي يرغب الطالب في الالتحاق بها، فدرجة البكالوريوس تتطلب مدة دراسة تصل إلى 4 سنوات لدراسة المسار العلمي للاقتصاد المنزلي(قسم إدارة المنزل، قسم التغذية، قسم الإسكان، قسم الملابس والنسيج) والمسار الإداري الإنساني(قسم الفنون الإسلامية، قسم الاقتصاد المنزلي التربوي، قسم دراسات الطفولة)، وفي السنة الرابعة من الدراسة تقوم الطالبات بتقديم مشروع التخرج وفقاً للقسم الخاص بكل طالبة للحصول على شهادة البكالوريوس في مجال الاقتصاد المنزلي."
            />
          </div>
        </div>
      </header>
    </Container>
  );
};

export default About