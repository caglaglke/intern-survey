import React, { useState } from "react";
import NavigationBar from "../../components/NavigationBar";

import "./styles.css";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Home() {
  const [form, setForm] = useState({ name: "", school: "", startDate: "" });

  const handleChangeValue = (key, value) => {
    setForm({ ...form, ...{ [key]: value } });
  };

  return (
    <div>
      <NavigationBar />
      <div className="container">
        <Input
          type="text"
          title="Ad Soyad"
          value={form.name}
          onChangeText={(value) => handleChangeValue("name", value)}
        />
        <Input
          type="text"
          title="Okul"
          value={form.school}
          onChangeText={(value) => handleChangeValue("school", value)}
        />
        <Input
          type="date"
          title="Staj Başlama tarihi"
          value={form.startDate}
          onChangeText={(value) => handleChangeValue("startDate", value)}
        />
        <Button type="primary">Gönder</Button>
      </div>
    </div>
  );
}
