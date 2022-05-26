import { CustomIcon } from './type';
import { CustomSVG } from './info';

const TableIcon: CustomIcon = ({ active }) => {
  return (
    <CustomSVG active={active} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.60301 11.6635H6.27613V13.3366H4.60301V11.6635Z" fill="#DFE6F1" />
      <path d="M0 22.3064C0 23.7917 1.20831 25 2.69356 25H22.3063C23.7917 25 25 23.7917 25 22.3064V7.74108H0V22.3064ZM10.1465 10.1987H21.1296C21.534 10.1987 21.862 10.5266 21.862 10.9311C21.862 11.3355 21.534 11.6636 21.1296 11.6636H10.1465C9.74197 11.6636 9.4141 11.3355 9.4141 10.9311C9.4141 10.5266 9.74197 10.1987 10.1465 10.1987ZM10.1465 13.3367H21.1296C21.534 13.3367 21.862 13.6646 21.862 14.0691C21.862 14.4737 21.534 14.8015 21.1296 14.8015H10.1465C9.74197 14.8015 9.4141 14.4737 9.4141 14.0691C9.4141 13.6646 9.74197 13.3367 10.1465 13.3367ZM3.13816 10.9311C3.13816 10.5266 3.46603 10.1987 3.87058 10.1987H7.00855C7.4131 10.1987 7.74097 10.5266 7.74097 10.9311V14.0691C7.74097 14.4737 7.4131 14.8015 7.00855 14.8015H3.87058C3.46603 14.8015 3.13816 14.4737 3.13816 14.0691V10.9311ZM3.87058 16.4747H21.1296C21.534 16.4747 21.862 16.8026 21.862 17.2071C21.862 17.6117 21.534 17.9395 21.1296 17.9395H3.87058C3.46603 17.9395 3.13816 17.6117 3.13816 17.2071C3.13816 16.8026 3.46584 16.4747 3.87058 16.4747ZM3.87058 19.6129H21.1296C21.534 19.6129 21.862 19.9407 21.862 20.3453C21.862 20.7496 21.534 21.0777 21.1296 21.0777H3.87058C3.46603 21.0777 3.13816 20.7496 3.13816 20.3453C3.13816 19.9407 3.46584 19.6129 3.87058 19.6129Z" fill="#DFE6F1" />
      <path d="M22.3063 0H2.69356C1.20831 0 0 1.20831 0 2.69357V6.27597H25V2.69357C25 1.20831 23.7917 0 22.3063 0ZM17.9914 4.60284H7.00836C6.604 4.60284 6.27594 4.27496 6.27594 3.87041C6.27594 3.46586 6.604 3.13799 7.00836 3.13799H17.9914C18.396 3.13799 18.7239 3.46586 18.7239 3.87041C18.7239 4.27496 18.396 4.60284 17.9914 4.60284Z" fill="#DFE6F1" />
    </CustomSVG>
  );
};

export default TableIcon;