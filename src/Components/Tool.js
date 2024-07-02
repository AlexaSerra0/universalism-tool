import React, { useState } from 'react';
import "../App.css";
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import 'beautiful-react-diagrams/styles.css';
import { Equality } from './Text';

function Tool() {

  const [isOpen, setIsOpen ] = useState(false)

  const CustomNode = ({content = 'Default Content'}) => (
    <div style={{ background: 'lightBlue', borderRadius: '15px' }}>
      <div role="button" style={{ padding: '15px' }} onClick={() => console.log("Hello")}>
        {content}
      </div>
    </div>
  );

  
  const initialSchema = createSchema({
    nodes: [
      { id: 'node-1', content: 'Node 1', coordinates: [500, 20], },
      { id: 'node-2', content: 'Node 2', coordinates: [1000, 500], },
      { id: 'node-3', content: 'Node 3', coordinates: [100, 220], },
      { id: 'node-4', render: CustomNode, content: 'Node 4', coordinates: [1300, 200], },
    ],
    links: [
      { input: 'node-1',  output: 'node-2' },
      { input: 'node-1',  output: 'node-3' },
      { input: 'node-1',  output: 'node-4' },
    ]
  });

  
  const UncontrolledDiagram = () => {
    // create diagrams schema
        const [schema, { onChange }] = useSchema(initialSchema);
      
        return (
          <div style={{ height: '35rem'}} >
            <Diagram schema={schema} onChange={onChange} />
          </div>
        );
    };


    return (
      <div className='diagramStyle'>
            <UncontrolledDiagram />  
        {isOpen && ( <Equality></Equality> )}
      </div> 
    );
}
export default Tool