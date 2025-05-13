import React from 'react';
import Heading from '../../../components/Heading';
import helpCaseState from '../../../assets/diagrams/help-state-diagram.png';
import contactCaseState from '../../../assets/diagrams/contact-case-state-diagram.png';

function StateManagement() {
    return (
        <>
            <Heading level={1} id='state-management'>
                State Management
            </Heading>

            <p>
                All state within the application is run through the Bloc Framework. The benefit of
                using something like Bloc is that it allows a complete seperation of buisness logic
                and frontend code. Each page has a four files: the state file, the cubit file, the
                page file, and the view file. The cubit file is where all the frontend logic is
                held. It connects the UI to the either domain or data layer repos. It is also
                responsible for driving the modules state. These states are held in the state file
                and typically contain an initial, loading, loaded, and error state. Each of these
                states has the opportunity to have its own member variables that are only
                accessibile when the application is in that state. This allows data to flow between
                the states and custom actions to be taken when the state changes.
            </p>

            <p>
                Below are two examples of typical examples of the flow between states. On the left,
                the state for the Help page is seen. This has the typical flow using the standard
                states. On the right, the Contact Case state flow contains a few additional states
                for when the form is submitted.
            </p>

            <div class='state-management-diagrams'>
                <div>
                    <img src={helpCaseState} alt='Help Module State Flow' />
                </div>
                <div>
                    <img src={contactCaseState} alt='Contact Case Module State Flow' />
                </div>
            </div>

            <p>
                The state determines what is shown in the UI. For example, when in the loading
                state, typically, a loading indicator is shown. This allows all logic to be done
                within and controlled by the cubit allowing the UI to respond to it rather than
                control it.
            </p>

            <p>
                In some instances, multiple components are controlled by the same cubit/state. In
                these cases, a <code>flags</code> component is used in each state that keeps track
                of which components are loaded or are loading. This way the state can progress from
                loading to loaded as soon as one component is loaded. Each of the components is only
                shown if its flag component indicates that it is loaded, even if the cubits state as
                a whole has progressed to loaded.
            </p>
        </>
    );
}

export default StateManagement;
