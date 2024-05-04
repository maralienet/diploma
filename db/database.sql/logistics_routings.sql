CREATE DATABASE  IF NOT EXISTS `logistics` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `logistics`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: logistics
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `routings`
--

DROP TABLE IF EXISTS `routings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `routings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `routeId` varchar(255) NOT NULL,
  `carId` int NOT NULL,
  `route` varchar(255) NOT NULL,
  `length` int NOT NULL,
  `duration` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `routings`
--

LOCK TABLES `routings` WRITE;
/*!40000 ALTER TABLE `routings` DISABLE KEYS */;
INSERT INTO `routings` VALUES (1,'9876OL',2,'1. Речица 2. Буда-Кошелёво 3. Жлобин 4. Речица',256,'4 ч 16 мин','2024-04-10 17:18:33','2024-04-10 17:18:33'),(2,'9876OL',6,'1. Речица 2. Буда-Кошелёво 3. Жлобин 4. Речица',256,'4 ч 16 мин','2024-04-10 17:18:33','2024-04-10 17:18:33'),(7,'7939XW',3,'1. Кобрин 2. Брест 3. Жабинка 4. Пружаны 5. Кобрин',203,'3 ч 28 мин','2024-04-10 17:25:40','2024-04-10 17:25:40'),(8,'7939XW',6,'1. Кобрин 2. Брест 3. Жабинка 4. Пружаны 5. Кобрин',203,'3 ч 28 мин','2024-04-10 17:25:40','2024-04-10 17:25:40'),(9,'6325GW',1,'1. Жлобин 2. Буда-Кошелёво 3. Рогачёв 4. Речица 5. Жлобин',370,'6 ч 10 мин','2024-04-10 17:31:15','2024-04-10 17:31:15'),(10,'0707GI',1,'1. Речица 2. Буда-Кошелёво 3. Жлобин 4. Светлогорск 5. Житковичи 6. Речица',570,'9 ч 3 мин','2024-04-12 05:36:12','2024-04-12 05:36:12'),(11,'0707GI',6,'1. Речица 2. Буда-Кошелёво 3. Жлобин 4. Светлогорск 5. Житковичи 6. Речица',570,'9 ч 3 мин','2024-04-12 05:36:12','2024-04-12 05:36:12'),(12,'0707GI',3,'1. Речица 2. Буда-Кошелёво 3. Жлобин 4. Светлогорск 5. Житковичи 6. Речица',570,'9 ч 3 мин','2024-04-12 05:36:12','2024-04-12 05:36:12'),(13,'9529KH',1,'1. Речица 2. Буда-Кошелёво 3. Корма 4. Дзержинск 5. Речица',750,'11 ч 24 мин','2024-04-12 06:52:18','2024-04-12 06:52:18'),(14,'9529KH',3,'1. Речица 2. Буда-Кошелёво 3. Корма 4. Дзержинск 5. Речица',750,'11 ч 24 мин','2024-04-12 06:52:18','2024-04-12 06:52:18'),(15,'5836RT',5,'1. Орша 2. Жлобин 3. Орша',410,'6 ч 31 мин','2024-04-14 09:04:09','2024-04-14 09:04:09'),(16,'5615LA',3,'1. Лельчицы 2. Ельск 3. Мозырь 4. Лельчицы',181,'2 ч 50 мин','2024-04-17 13:19:42','2024-04-17 13:19:42'),(17,'3467BG',1,'1. Лунинец 2. Давид-Городок 3. Микашевичи 4. Лунинец',296,'5 ч 2 мин','2024-04-17 21:55:44','2024-04-17 21:55:44'),(18,'6815UL',2,'1. Житковичи 2. Любань 3. Солигорск 4. Слуцк 5. Кобрин 6. Житковичи',660,'9 ч 42 мин','2024-04-19 13:14:44','2024-04-19 13:14:44'),(19,'9746FN',5,'1. Житковичи 2. Солигорск 3. Мозырь 4. Житковичи',460,'7 ч 39 мин','2024-04-23 07:06:03','2024-04-23 07:06:03');
/*!40000 ALTER TABLE `routings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-28 12:44:49
