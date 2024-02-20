import React from 'react';

const PrintButton = () => {
    function printDiv() {
        let divContents = document.getElementById('CV').innerHTML;
        let a = window.open('', '', 'height=500, width=500');
        a.document.write('<html>');
        a.document.write('<body>');
        a.document.write(divContents);
        a.document.write('</body>');
        a.document.write('<style> button { display: none; } </style>');
        a.document.write('</html>');
        a.document.close();
        a.print();
    };

    return ( 
        <div>
            <button type="button" onClick={printDiv} className="bottomSpace">Télécharger votre CV</button>
        </div>
     );
}
 
export default PrintButton;