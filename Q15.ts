// 15. Changing Guest List: You just heard that one of your guests can't make the dinner, so you need to send out a new set of invitations. You'll have to think of someone else to invite.
// _ Start with your program from Exercise 14. Add a print statement at the end of your program stating the name  of   the guest who can't make it.
// _ Modify your list, ereplacing the name of the guest who can't make it with the name of new person you are inviting.
// _ Print a second set of invitation messages, one for each person who is still in your List.

let guestArr: string[] = ["JANNAT", "ALIZA", "ESHA",]

let canNotAttend: string = "JANNAT"
console.log(canNotAttend + ' ' + "can not make it, for Dinner");


let newGuest: string = "SAHAR"
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)
 guestArr.map((item)  =>
   console.log(`DEAR ${item} , You Are Cordinally Invited To A Dinner`)
  )