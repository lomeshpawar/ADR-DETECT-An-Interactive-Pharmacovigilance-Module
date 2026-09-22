-- ADR-DETECT Database Schema for MySQL / H2

CREATE TABLE IF NOT EXISTS reaction_type_info (
    code VARCHAR(5) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    mnemonic VARCHAR(50),
    description VARCHAR(1000),
    mechanism VARCHAR(1000),
    clinical_examples VARCHAR(1000)
);

CREATE TABLE IF NOT EXISTS cases (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    case_number VARCHAR(20) NOT NULL UNIQUE,
    title VARCHAR(200) NOT NULL,
    difficulty VARCHAR(20),
    category VARCHAR(100),
    summary VARCHAR(1000),
    suspected_drug VARCHAR(100) NOT NULL,
    reaction_name VARCHAR(200) NOT NULL,
    reaction_type_code VARCHAR(5),
    severity VARCHAR(20),
    causality VARCHAR(50),
    correct_interventions VARCHAR(500),
    outcome VARCHAR(100),
    dechallenge_info VARCHAR(1000),
    rechallenge_info VARCHAR(1000),
    clinical_explanation VARCHAR(2000),
    learning_points VARCHAR(2000)
);

CREATE TABLE IF NOT EXISTS patients (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    case_id BIGINT NOT NULL,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(20) NOT NULL,
    weight DOUBLE,
    diagnosis VARCHAR(200),
    chief_complaints VARCHAR(1000),
    CONSTRAINT fk_patient_case FOREIGN KEY (case_id) REFERENCES cases(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS medications (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    case_id BIGINT NOT NULL,
    name VARCHAR(100) NOT NULL,
    dose VARCHAR(50),
    frequency VARCHAR(50),
    route VARCHAR(50),
    start_day VARCHAR(50),
    indication VARCHAR(200),
    is_suspected BOOLEAN DEFAULT FALSE,
    CONSTRAINT fk_med_case FOREIGN KEY (case_id) REFERENCES cases(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS clues (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    case_id BIGINT NOT NULL,
    category VARCHAR(50) NOT NULL,
    title VARCHAR(200) NOT NULL,
    content VARCHAR(2000) NOT NULL,
    icon VARCHAR(50),
    sort_order INT,
    CONSTRAINT fk_clue_case FOREIGN KEY (case_id) REFERENCES cases(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS symptoms (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    case_id BIGINT NOT NULL,
    day_onset VARCHAR(50),
    description VARCHAR(200) NOT NULL,
    severity VARCHAR(50),
    CONSTRAINT fk_symptom_case FOREIGN KEY (case_id) REFERENCES cases(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS adr_reports (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    case_id BIGINT NOT NULL,
    patient_initials VARCHAR(20),
    age INT,
    gender VARCHAR(20),
    suspected_drug VARCHAR(100) NOT NULL,
    reaction VARCHAR(200) NOT NULL,
    date_of_onset VARCHAR(50),
    severity VARCHAR(50),
    causality VARCHAR(50),
    action_taken VARCHAR(200),
    outcome VARCHAR(100),
    reporter_name VARCHAR(100) NOT NULL,
    reporter_type VARCHAR(100),
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS scores (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    case_id BIGINT NOT NULL,
    user_id VARCHAR(100),
    suspected_drug_score INT,
    reaction_score INT,
    reaction_type_score INT,
    severity_score INT,
    causality_score INT,
    intervention_score INT,
    reporting_score INT,
    total_score INT,
    max_score INT,
    percentage DOUBLE,
    stars INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS education_content (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    slug VARCHAR(100) NOT NULL UNIQUE,
    title VARCHAR(200) NOT NULL,
    summary VARCHAR(1000),
    content VARCHAR(4000),
    category VARCHAR(100),
    icon VARCHAR(50)
);
