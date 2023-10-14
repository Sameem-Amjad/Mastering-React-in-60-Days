import Functional from './ReactLearningTopics/Functional';
import ClassComponent from './ReactLearningTopics/ClassComponent';
import State from './ReactLearningTopics/StateInFunctionalComponent';
import Props from './ReactLearningTopics/FunctionalProps';
import InputBox from './ReactLearningTopics/InputBox';
import Toggle from './ReactLearningTopics/Toggle';
import OnClick from './ReactLearningTopics/OnCLickEvent';
import FormData from './ReactLearningTopics/FormData';
import Profile from './ReactLearningTopics/ConditionalRendering';
import Login from './ReactLearningTopics/BasicFormValidation';
import PropFunction from './ReactLearningTopics/PassFunctionAsProps';
import LifeCycle from './ReactLearningTopics/LifeCycleMethod';
import Constructor from './ReactLearningTopics/ConstructorInLifeCycleMethod';
import Render from './ReactLearningTopics/RenderLifeCycleMethod';
import CDMMethod from './ReactLearningTopics/ComponentDidMountMethod';
import MapFunction from './ReactLearningTopics/MapFunction';
import NestedList from './ReactLearningTopics/NestedListInNestedArray';
import ComponentDidUpdateMethod from './ReactLearningTopics/ComponentDidUpdate';
import LiftingUpState from './ReactLearningTopics/LiftingStateUp';
import UseMemo from './ReactLearningTopics/UseMemoHook';
import HOC from './ReactLearningTopics/HigherOrderComponent';
import { useState } from 'react';
function ReactLearningTopics ()
{
    let [ name, setName ] = useState( "sameem" );
  function updateName ()
  {
    setName( "Sameem Amjad" );
  }
  return (
   <>
      <Functional />
      <ClassComponent />
      <ClassComponent />
      <ClassComponent />
      <OnClick></OnClick>
      <State />
      <div >
        <Props name={ name } mobile={ "0300xxxxxxx" } address={ "Iqbal Colony " } others={ { nickname: "samiMirza", email: "sameem@test.com" } } />
        <button className='onClickEvent' onClick={ updateName }>
          Update Name
        </button>
      </div>
      <InputBox />
      <Toggle />
      <FormData />
      <Profile />
      <Login />
      <PropFunction data={ () => { alert( "hello Users" ); } } />
      <LifeCycle />
      <Constructor />
      <div>
        <Render name={ name } />
        <button className='onClickEvent' onClick={ () => { setName( "SAMEEM AMJAD" ); } }>Click Me</button>
      </div>
      <CDMMethod />
      <ComponentDidUpdateMethod />
      <MapFunction />
      <NestedList />
      <LiftingUpState />
      <UseMemo />
      <HOC cmp={ Counter} />
    </>
  );
}
function Counter ()
{
    const [ count, setCount ] = useState( 0 );
  return <>
    <h1>{ count}</h1>
        <button onClick={()=>setCount(count+1)} className="onClickEvent">Counter</button>
    </>;
}
export default ReactLearningTopics;