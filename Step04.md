# Step 04

**Create Student & Classroom Services**

`ng g s services\classroom`

`ng g s services\student`


**Using list from services**

Move list of students & classrooms in the services.

**Using services for cross-component communication**

create eventEmitter in the student service.

In the Item component we remove the output property and change the onClick method in order to use the event Emitter of the service by putting the student on it.

In the List component we remove the output property too.

In the Parent component we subscribe to the event Emitter of the service to listen at the student subject. 

