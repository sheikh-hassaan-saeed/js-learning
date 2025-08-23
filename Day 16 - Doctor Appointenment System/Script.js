///DOCTOR APPOINTMENT SYSTEM - BASIC LEVEL///

const doctor = {
    name: "Dr Peter",
    specialization: "General Physician",
    appointment: [],

    addAppointment: function (patientName, age, time) {
        this.appointment.push({ patientName, age, time }); {
            console.log(`${patientName} - ${age} years old is scheduled at ${time}`);
        }
    },


    cancelAppointment: function (patientName) {
        this.appointment = this.appointment.filter(
            appointment => appointment.patientName != patientName)
        console.log(`Appointment for ${patientName} canceled`);
    }
};
console.log(doctor.name);
console.log(doctor.specialization);
console.log("Doctor Appointments Below:");
doctor.addAppointment("Bob", "34", "10:00 AM");
doctor.addAppointment("Alice", "28", "11:00 AM");
