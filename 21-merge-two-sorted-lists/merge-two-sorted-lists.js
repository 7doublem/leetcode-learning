/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0)
    let head = dummy


    while (list1 && list2) {
        if (list1.val <= list2.val) {
            dummy.next = list1
            list1 = list1.next
        } else {
            dummy.next = list2
            list2 = list2.next
        }
        dummy = dummy.next
    }
    console.log(list1)
    console.log(list2)
    console.log(head)

    if (list1 !== null) {
        dummy.next = list1
    } else {
        dummy.next= list2
    }
    return head.next
};