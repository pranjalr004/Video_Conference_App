import { EuiButton, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { useNavigate } from 'react-router-dom';

function CreateMeetingButtons({
    createMeeting,
    isEdit = false,
    closeFlyout,
}: {
    createMeeting: () => void;
    isEdit?: boolean;
    closeFlyout?: () => {};
}) {
    const navigate = useNavigate()
    return (
        <EuiFlexGroup>
            <EuiFlexItem grow={false}>
                <EuiButton 
                color='danger' onClick={()=>(isEdit ? closeFlyout!(): navigate("/"))}
                fill>
                Cancel
                </EuiButton>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
                <EuiButton type='submit' onClick={createMeeting}>
                    Submit
                </EuiButton>
            </EuiFlexItem>
        </EuiFlexGroup>
    );
}

export default CreateMeetingButtons