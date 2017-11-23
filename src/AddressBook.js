function AddressBook() {
    this.contacts = [];
    this.initialComplete = false;
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
};

AddressBook.prototype.getContact = function(index) {
    return this.contacts[index];
}

AddressBook.prototype.deleteContact = function(index) {
    this.contacts.splice(index, 1);
}

AddressBook.prototype.getInitialContacts = function(cb) {
    var self = this;
    setTimeout(function() {
        self.initialComplete = true;
        console.log(cb);
        if (cb) {
            return cb();
        }
    }, 3);
}