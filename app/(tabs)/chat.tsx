import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    area: "",
    idNumber: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { type: "sent", text: message }]);
      setMessage(""); // Clear the input after sending

      // Simulate an incoming message from the admin
      setTimeout(() => {
        if (formSubmitted) {
          setFormSubmitted(false); // Reset formSubmitted status for next form
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { type: "received", text: "Please fill out the form below." },
          ]);
          setShowForm(true);
        }
      }, 1000);
    }
  };

  const handleFormSubmit = () => {
    const formattedMessage = `
      Form Submission:
      Name: ${formData.name}
      Phone Number: ${formData.phoneNumber}
      Area: ${formData.area}
      ID Number: ${formData.idNumber}
    `;
    setMessages([
      ...messages,
      { type: "sent", text: formattedMessage },
    ]);
    setShowForm(false);

    // Simulate an admin response after the form is submitted
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "received", text: "Thank you for your submission. We will contact you soon." },
      ]);
    }, 1000);
    
    setFormSubmitted(true);
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.headerContainer}>
        <View style={styles.header}>
          <Image
            source={{ uri: "https://via.placeholder.com/50" }} // Placeholder for admin image
            style={styles.avatar}
          />
          <Text style={styles.headerText}>Admin</Text>
        </View>
      </SafeAreaView>

      <View style={styles.chatContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {messages.map((msg, index) => (
            <View
              key={index}
              style={[
                styles.messageContainer,
                {
                  alignSelf: msg.type === "sent" ? "flex-end" : "flex-start",
                  backgroundColor: msg.type === "sent" ? "#DCF8C6" : "#ECECEC",
                },
              ]}
            >
              <View style={styles.messageBubble}>
                <Text style={styles.messageText}>{msg.text}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        {showForm && (
          <View style={styles.formContainer}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              placeholder="Enter your name"
              value={formData.name}
              onChangeText={(text) => handleChange("name", text)}
              style={styles.input}
            />
            <Text style={styles.label}>Phone Number:</Text>
            <TextInput
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChangeText={(text) => handleChange("phoneNumber", text)}
              keyboardType="phone-pad"
              style={styles.input}
            />
            <Text style={styles.label}>Area:</Text>
            <TextInput
              placeholder="Enter your area"
              value={formData.area}
              onChangeText={(text) => handleChange("area", text)}
              style={styles.input}
            />
            <Text style={styles.label}>ID Number:</Text>
            <TextInput
              placeholder="Enter your ID number"
              value={formData.idNumber}
              onChangeText={(text) => handleChange("idNumber", text)}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={handleFormSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.inputContainer}>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Type a message"
            placeholderTextColor="#999"
            style={styles.textInput}
          />
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#075E54",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#128C7E",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold",
  },
  chatContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  messageContainer: {
    maxWidth: "80%",
    marginVertical: 5,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  messageBubble: {
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  messageText: {
    fontSize: 14,
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "white",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#128C7E",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  formContainer: {
    padding: 10,
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    marginVertical: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  submitButton: {
    backgroundColor: "#128C7E",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
