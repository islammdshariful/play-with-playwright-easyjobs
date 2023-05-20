export const pipeline = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    const joiningMonth = date.toLocaleString('default', { month: 'short' });
    const joiningYear = date.getFullYear();
    let joining = {
        joiningDate: {
            year : joiningYear,
            month : joiningMonth,
            date : '1'
        },
        provisionPeriod: '3-months',
        assignedSalary: '90000',
        appointmentLetter: "./utils/files/documents/job-offer-letter.pdf"
    }

    let reject = {
        reason: 'Lorem Ipsum is simply a dummy text of the printing and typesetting industry.'
    }

    return {
        joining,
        reject
    }
}